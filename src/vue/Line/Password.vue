<template>
    <div @click="clickAction($event)"
         @dblclick="doubleClickAction($event)"
         @dragstart="dragStartAction($event)"
         :class="className"
         :data-password-id="password.id"
         :data-password-title="password.label">
        <i data-item-action="favorite" class="fa fa-star favorite" :class="{ active: password.favorite }" @click="favoriteAction($event)"></i>
        <favicon class="favicon" :domain="password.website" :title="getTitle" v-if="isVisible"/>
        <div class="title" :title="getTitle"><span>{{ getTitle }}</span></div>
        <ul slot="middle" class="tags" v-if="showTags" :style="tagStyle">
            <li v-for="tag in getTags"
                :key="tag.id"
                :title="tag.label"
                :style="{color: tag.color}"
                @click="openTagAction($event, tag.id)">&nbsp;
            </li>
        </ul>
        <slot name="middle"/>
        <router-link :to="securityRoute" tag="i" :class="securityCheck" class="fa fa-shield security duplicate" :title="securityTitle" v-if="password.statusCode === 'DUPLICATE'"/>
        <i :class="securityCheck" class="fa fa-shield security" :title="securityTitle" v-else></i>
        <div class="more" @click="toggleMenu($event)">
            <i class="fa fa-ellipsis-h"></i>
            <div class="passwordActionsMenu popovermenu bubble menu" :class="{ open: showMenu }">
                <slot name="menu">
                    <ul>
                        <slot name="menu-top"/>
                        <translate tag="li" data-item-action="details" @click="detailsAction()" icon="info" say="Details"/>
                        <translate tag="li" data-item-action="share" @click="detailsAction('share')" icon="share-alt" say="Share"/>
                        <translate tag="li" data-item-action="edit" @click="editAction()" icon="pencil" v-if="password.editable" say="Edit"/>
                        <translate tag="li" data-item-action="edit-new" @click="cloneAction()" icon="files-o" v-if="password.editable" say="Edit as new"/>
                        <translate tag="li" data-item-action="move" @click="moveAction" icon="external-link" v-if="password.editable" say="Move"/>
                        <translate tag="li"
                                   v-if="showCopyOptions"
                                   @click="copyAction('password')"
                                   icon="clipboard"
                                   say="Copy Password"/>
                        <translate tag="li"
                                   v-if="showCopyOptions"
                                   @click="copyAction('username')"
                                   icon="clipboard"
                                   say="Copy User"/>
                        <translate tag="li"
                                   v-if="password.url"
                                   @click="copyAction('url')"
                                   icon="clipboard"
                                   say="Copy Url"/>
                        <li v-if="password.url">
                            <translate tag="a" data-item-action="open-url" :href="password.url" target="_blank" icon="link" say="Open Url"/>
                        </li>
                        <translate tag="li" data-item-action="delete" @click="deleteAction()" icon="trash" say="Delete"/>
                        <slot name="menu-bottom"/>
                    </ul>
                </slot>
            </div>
        </div>
        <div class="date" :title="dateTitle">{{ getDate }}</div>
    </div>
</template>

<script>
    import $ from "jquery";
    import Translate from '@vc/Translate';
    import Utility from '@js/Classes/Utility';
    import Messages from '@js/Classes/Messages';
    import DragManager from '@js/Manager/DragManager';
    import Localisation from "@js/Classes/Localisation";
    import PasswordManager from '@js/Manager/PasswordManager';
    import SettingsService from '@js/Services/SettingsService';
    import Favicon from "@vc/Favicon";
    import Events from "@js/Classes/Events";
    import SearchManager from "@js/Manager/SearchManager";
    import ContextMenuService from "@js/Services/ContextMenuService";

    export default {
        components: {
            Favicon,
            Translate
        },

        props: {
            password: {
                type: Object
            }
        },

        data() {
            return {
                clickTimeout : null,
                showMenu     : false,
                detailsActive: false
            };
        },

        computed: {
            securityCheck() {
                switch(this.password.status) {
                    case 0:
                        return 'ok';
                    case 1:
                        return 'warn';
                    case 2:
                        return 'fail';
                    case 3:
                        return 'unknown';
                }
            },
            securityTitle() {
                let label = 'Unknown';
                if(this.password.status === 0) label = 'Secure';
                if(this.password.status === 1) label = `Weak (${this.password.statusCode.toLowerCase().capitalize()})`;
                if(this.password.status === 2) label = 'Breached';

                return Localisation.translate(label);
            },
            securityRoute() {
                return {name: 'Search', params: {query: btoa('hash:' + this.password.hash)}};
            },
            showCopyOptions() {
                return window.innerWidth < 361 || SettingsService.get('client.ui.password.menu.copy');
            },
            showTags() {
                return window.innerWidth > 360 && SettingsService.get('client.ui.list.tags.show') && this.password.tags;
            },
            getTitle() {
                let titleField = SettingsService.get('client.ui.password.field.title'),
                    showUser   = SettingsService.get('client.ui.password.user.show'),
                    title      = this.password[titleField];

                if(!title && this.password.label) title = this.password.label;
                if(!title && this.password.website) title = this.password.website;
                if(showUser && this.password.username) title = `${title} – ${this.password.username}`;
                return title;
            },
            getTags() {
                return Utility.sortApiObjectArray(this.password.tags, 'label');
            },
            tagStyle() {
                let length = Utility.objectToArray(this.password.tags).length;
                if(length) {
                    return {
                        'padding-left': (length + 18) + 'px'
                    };
                }

                return {};
            },
            getDate() {
                return Localisation.formatDate(this.password.edited);
            },
            dateTitle() {
                return Localisation.translate(
                    'Last modified on {date}',
                    {date: Localisation.formatDateTime(this.password.edited)}
                );
            },
            isVisible() {
                if(SearchManager.status.active) {
                    if(SearchManager.status.ids.indexOf(this.password.id) === -1) return false;
                }

                return true;
            },
            className() {
                let classNames = 'row password';

                if(this.detailsActive) classNames += ' details-open';
                if(this.isVisible) {
                    classNames += ' search-visible';
                } else if(SearchManager.status.active) {
                    classNames += ' search-hidden';
                }

                return classNames;
            }
        },

        mounted() {
            ContextMenuService.register(this.password, this.$el);
        },

        methods: {
            clickAction($event) {
                if($event && ($event.detail !== 1 || $($event.target).closest('.more').length !== 0 || $event.target.classList.contains('duplicate'))) return;
                if(this.clickTimeout) clearTimeout(this.clickTimeout);

                let action = SettingsService.get('client.ui.password.click.action');
                if(action !== 'none') this.runClickAction(action, 300);
            },
            doubleClickAction($event) {
                if($event && ($($event.target).closest('.more').length !== 0 || $event.target.classList.contains('duplicate'))) return;
                let action = SettingsService.get('client.ui.password.dblClick.action');

                if(action !== 'none') {
                    if(this.clickTimeout) clearTimeout(this.clickTimeout);
                    this.runClickAction(action);
                }
            },
            runClickAction(action, delay = 0) {
                if(action !== 'details' && action !== 'edit') {
                    this.copyAction(action, delay);
                } else if(action === 'edit') {
                    this.clickTimeout = setTimeout(this.editAction, delay);
                } else if(action === 'details') this.clickTimeout = setTimeout(this.detailsAction, delay);
            },
            copyAction(attribute, delay = 0) {
                let message = 'Error copying {element} to clipboard';
                if(Utility.copyToClipboard(this.password[attribute])) message = '{element} was copied to clipboard';

                this.clickTimeout = setTimeout(() => {
                    Messages.notification([message, {element: Localisation.translate(attribute.capitalize())}]);
                }, delay);
            },
            favoriteAction($event) {
                $event.stopPropagation();
                this.password.favorite = !this.password.favorite;
                PasswordManager
                    .updatePassword(this.password)
                    .catch(() => { this.password.favorite = !this.password.favorite; });
            },
            toggleMenu($event) {
                this.showMenu = !this.showMenu;
                this.showMenu ? $(document).click(this.menuEvent):$(document).off('click', this.menuEvent);
            },
            menuEvent($e) {
                if($($e.target).closest('[data-password-id=' + this.password.id + '] .more').length !== 0) return;
                this.showMenu = false;
                $(document).off('click', this.menuEvent);
            },
            detailsAction(section = 'details') {
                this.detailsActive = true;
                this.$parent.detail = {type: 'password', element: this.password, section};

                let appClasses = document.getElementById('app').classList;
                if(appClasses.contains('mobile-open')) appClasses.remove('mobile-open');

                let listener = (item) => {
                    if(item.object.id === this.password.id) {
                        Events.off('details.close', listener);
                        this.detailsActive = false;
                    }
                };

                Events.on('details.close', listener);
            },
            editAction() {
                PasswordManager
                    .editPassword(this.password)
                    .then((p) => {this.password = p;});
            },
            cloneAction() {
                PasswordManager
                    .clonePassword(this.password);
            },
            deleteAction() {
                PasswordManager.deletePassword(this.password);
            },
            moveAction() {
                PasswordManager.movePassword(this.password);
            },
            dragStartAction($e) {
                DragManager
                    .start($e, this.password)
                    .then((data) => {
                        if(data.dropType === 'folder') {
                            PasswordManager
                                .movePassword(this.password, data.folderId)
                                .then((p) => {this.password = p;});
                        } else if(data.dropType === 'trash') {
                            PasswordManager.deletePassword(this.password);
                        }
                    });
            },
            openTagAction($event, tag) {
                $event.stopPropagation();
                this.$router.push({name: 'Tags', params: {tag: tag}});
            }
        },

        watch: {
            password(value) {
                ContextMenuService.register(value, this.$el);
            }
        }
    };
</script>

<style lang="scss">

#dragicon {
    padding         : 5px 5px 5px 42px;
    background      : no-repeat 5px;
    background-size : 32px;
    line-height     : 32px;
    display         : inline-block;
}

#app-content {
    .item-list {
        .row {
            height        : 51px;
            font-size     : 0;
            border-bottom : 1px solid var(--color-border);
            cursor        : pointer;
            display       : flex;

            .favorite {
                line-height : 50px;
                width       : 40px;
                text-align  : center;
                color       : $color-grey-light;
                font-size   : 1rem;
                flex-shrink : 0;

                &:hover,
                &.active {
                    color : var(--color-warning);
                }
            }

            .favicon {
                display         : inline-block;
                background      : no-repeat center;
                background-size : 32px;
                border-radius   : var(--border-radius);
                line-height     : 32px;
                font-size       : 1rem;
                cursor          : pointer;
                width           : 32px;
                height          : 32px;
                margin          : 9px;
                flex-shrink     : 0;
            }

            .title {
                font-size      : 0.8rem;
                padding-left   : 8px;
                cursor         : pointer;
                line-height    : 50px;
                min-width      : 0;
                white-space    : nowrap;
                overflow       : hidden;
                text-overflow  : ellipsis;
                flex-grow      : 1;
                vertical-align : baseline;
                display        : flex;

                > span {
                    text-overflow : ellipsis;
                    overflow      : hidden;
                    cursor        : pointer;
                }
            }

            .tags {
                height       : 50px;
                flex-shrink  : 0;
                line-height  : 50px;
                font-size    : 24px;
                z-index      : 1;
                padding-left : 0;
                transition   : padding-left 0.25s ease-in-out;

                li {
                    display     : inline-block;
                    margin-left : -18px;
                    transition  : margin-left 0.25s ease-in-out;

                    &:before {
                        content     : "\F02B";
                        font-family : var(--pw-icon-font-face);
                        cursor      : pointer;
                    }
                }

                &:hover {
                    padding-left : 5px !important;

                    li {
                        margin-left : -6px;
                    }
                }
            }

            .more,
            .icon,
            .security {
                line-height : 50px;
                width       : 50px;
                font-size   : 1rem;
                text-align  : center;
                flex-shrink : 0;
                color       : $color-grey;
                transition  : color 0.2s ease-in-out;

                &:active,
                &:hover {
                    color : var(--color-main-text);
                }

                &.duplicate {
                    transition : color 0.2s ease-in-out, transform 0.2s ease-in-out;

                    &:hover {
                        transform : scale(1.5);
                    }
                }

                &.icon,
                &.security {
                    font-size : 1.25rem;
                }

                &.ok {
                    color : var(--color-success);
                }

                &.warn {
                    color : var(--color-warning);
                }

                &.fail {
                    color : var(--color-error);
                }
            }

            .more {
                position : relative;

                > i {
                    cursor : pointer;
                }

                .menu {
                    li {
                        line-height : 40px;
                        font-size   : 0.8rem;
                        padding     : 0 20px 0 15px;
                        white-space : nowrap;
                        color       : var(--color-main-text);
                        font-weight : 300;
                        cursor      : pointer;

                        a {
                            color         : var(--color-main-text);
                            margin        : 0 -20px 0 -15px;
                            padding-left  : 15px;
                            padding-right : 0 !important;
                            opacity       : 1 !important;
                            line-height   : inherit;
                            font-weight   : 300;
                        }

                        i {
                            line-height  : 40px;
                            margin-right : 10px;
                            font-size    : 1rem;
                            width        : 1rem;
                            cursor       : pointer;
                        }

                        &:active,
                        &:hover {
                            background-color : var(--color-background-dark);
                            color            : var(--color-main-text);

                            a {
                                background-color : var(--color-background-dark);
                                color            : var(--color-main-text);
                            }

                            i {
                                color : var(--color-main-text);
                            }
                        }
                    }
                }
            }

            .date {
                line-height : 50px;
                width       : 125px;
                font-size   : 0.8rem;
                padding     : 0 15px 0 5px;
                text-align  : right;
                color       : $color-grey-darker;
                flex-shrink : 0;
            }

            &:hover,
            &:active,
            &.details-open {
                background-color : var(--color-background-hover);

                .favorite {
                    color : darken($color-grey-light, 3);

                    &:hover,
                    &.active {
                        color : var(--color-warning);
                    }
                }
            }

            &.details-open {
                background-color : var(--color-primary-light);
            }

            @media(max-width : $width-extra-small) {
                .date {
                    display : none;
                }
            }
        }
    }

    @media(max-width : $width-large) {
        &.show-details .item-list .row {
            .date {
                display : none;
            }
        }
    }

    @media(max-width : $width-medium) {
        &.show-details .item-list .row {
            .tags,
            .date,
            .security {
                display : none;
            }
        }
    }
}

</style>
