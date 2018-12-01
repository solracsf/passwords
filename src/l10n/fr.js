(function() {
    let translations = {
            'Passwords'                           : 'Mots de passe',
            'All'                                 : 'Tous',
            'Folders'                             : 'Dossiers',
            'Recent'                              : 'Récent',
            'Favorites'                           : 'Favoris',
            'Shared'                              : 'Partagés',
            'Tags'                                : 'Étiquettes',
            'Security'                            : 'Sécurité',
            'Trash'                               : 'Corbeille',
            'Details'                             : 'Détails',
            'Edit'                                : 'Modifier',
            'Rename'                              : 'Renommer',
            'Delete'                              : 'Effacer',
            'Restore'                             : 'Restaurer',
            'New Password'                        : 'Nouveau mot de passe',
            'New Folder'                          : 'Nouveau dossier',
            'New Tag'                             : 'Nouveau mot clé',
            'Secure'                              : 'Sécurisé',
            'Weak'                                : 'Faible',
            'Weak (Duplicate)'                    : 'Faible (Dupliqué)',
            'Weak (Outdated)'                     : 'Faible (Obsolète)',
            'Breached'                            : 'Compromis',
            'Notes'                               : 'Notes',
            'Share'                               : 'Partager',
            'Revisions'                           : 'Révisions',
            'QR Code'                             : 'QR Code',
            'Password'                            : 'Mot de passe',
            'Username'                            : 'Nom d’utilisateur',
            'Website'                             : 'Site internet',
            'Add Tags...'                         : 'Ajouter des mots clés…',
            'Color'                               : 'Couleur',
            'Name'                                : 'Nom',
            'Label'                               : 'Libéllé',
            'General'                             : 'Général',
            'Properties'                          : 'Propriétés',
            'Numbers'                             : 'Nombres',
            'Special Characters'                  : 'Caractères spéciaux',
            'More Options'                        : 'Plus d’options',
            'Favorite'                            : 'Favori',
            'Encryption'                          : 'Chiffrement',
            'On the server'                       : 'Sur le serveur',
            'Custom Fields'                       : 'Champs personnalisés',
            'Secret'                              : 'Secret',
            'Text'                                : 'Texte',
            'File'                                : 'Fichier',            
            'Value'                               : 'Valeur',
            'Toggle visibility'                   : 'Changer la visibilité',
            'Generate password'                   : 'Générer un mot de passe',
            'Simple Server Side Encryption V1'    : 'Version 1 simple chiffrement coté serveur',
            'Take some notes'                     : 'Prendre quelques notes',
            'Save'                                : 'Sauvegarder',
            'Create folder'                       : 'Créer un dossier',
            'Folder created'                      : 'Dossier crée',
            'Creating folder failed'              : 'Le dossier n’a pas pu être créé',
            'Rename folder'                       : 'Renommer le dossier',
            'Folder renamed'                      : 'Dossier renommé',
            'Renaming folder failed'              : 'Le dossier n’a pas pu être renommé',
            'Folder moved'                        : 'Dossier déplacé',
            'Moving folder failed'                : 'Le dossier n’a pas pu être déplacé',
            'Delete folder'                       : 'Effacer le dossier',
            'Do you want to delete the folder'    : 'Êtes vous sur de vouloir effacer le dossier ?',
            'Folder deleted'                      : 'Dossier effacé',
            'Deleting folder failed'              : 'Le dossier n’a pas pu être effacé',
            'Folder restored'                     : 'Dossier restauré',
            'Restoring folder failed'             : 'Le dossier n’a pas pu être restauré',
            'Create tag'                          : 'Créer une étiquette',
            'Tag created'                         : 'Étiquette crée',
            'Creating tag failed'                 : 'L’étiquette n’a pas pu être effacée',
            'Edit tag'                            : 'Modifier l’étiquette',
            'Tag saved'                           : 'Étiquette sauvegardée',
            'Saving tag failed'                   : 'L’étiquette n’a pas pu être sauvegardée',
            'Delete tag'                          : 'Effacer l’étiquette',
            'Do you want to delete the tag'       : 'Êtes vous sûr de vouloir effacer l’étiquette ?',
            'Tag deleted'                         : 'Étiquette effacée',
            'Deleting tag failed'                 : 'L’étiquette n’a pas pu être effacée',
            'Tag restored'                        : 'Étiquette restaurée',
            'Restoring tag failed'                : 'L’étiquette n’a pas pu être restaurée',
            'Create password'                     : 'Créer un mot de passe',
            'Password created'                    : 'Mot de passe créé',
            'Creating password failed'            : 'Le mot de passe n’a pas pu être créé',
            'Edit password'                       : 'Modifier le mot de passe',
            'Password saved'                      : 'Mot de passe sauvegardé',
            'Saving password failed'              : 'Le mot de passe n’a pas pu être sauvegardé',
            'Password moved'                      : 'Mot de passe déplacé',
            'Moving password failed'              : 'Le mot de passe n’a pas pu être déplacé',
            'Delete password'                     : 'Effacer le mot de passe',
            'Do you want to delete the password'  : 'Êtes vous sur de vouloir effacer le mot de passe ?',
            'Password deleted'                    : 'Mot de passe effacé',
            'Password restored'                   : 'Mot de passe restauré',
            'Restoring password failed'           : 'Le mot de passe n’a pas pu être restauré',
            'Open Url'                            : 'Ouvrir le lien',
            'Copy Url'                            : 'Copier le lien',
            'Copy User'                           : 'Copier l’utilisateur',
            'Copy Password'                       : 'Copier le mot de passe',
            '{element} was copied to clipboard'   : '{element} a été copié dans le presse-papier',
            'Last modified on {date}'             : 'Dernière modification le {date}',
            'Restore revision'                    : 'Restaurer une version antérieure',
            'Revision restored'                   : 'Version restaurée',
            'Restoring revision failed'           : 'Échec à la restauration antérieure',
            'Do you want to restore the revision?': 'Êtes vous sûr de vouloir restaurer une version antérieure ?',
            'Shared with you'                      : 'Partagé avec moi',
            'Shared by you'                        : 'Partagé par moi',
            'Statistics'                          : 'Statistiques',
            'Created on'                          : 'Crée sur',
            'Last updated'                        : 'Dernière mise à jour',
            '{count} revisions'                   : '{count} révisions',
            'Shares'                              : 'Partages',
            '{count} shares'                      : '{count} partages',
            'More'                                : 'Plus',
            'Backup and Restore'                  : 'Sauvegarde et Restauration',
            'Browser Extension'                   : 'Extension navigateur',
            'Handbook'                            : 'Manuel',
            'Search user'                         : 'Chercher un utilisateur',
            'Set expiration date'                 : 'Définir une date d’expiration',
            'Expires {date}'                      : 'Expire le {date}',
            'Choose expiration date'              : 'Choisissez une date d’expiration',
            'Please choose a date in the future'  : 'La date doit être ultérieure à aujourd’hui',
            'Invalid date'                        : 'Date non valide',
            'The user {uid} does not exist'       : 'L’utilisateur {uid} n’existe pas',
            'Unable to share password: {message}' : 'Impossible de partager le mot de passe : {message}',
            'Toggle write permissions'            : 'Changer le droit d’écriture',
            'Toggle share permissions'            : 'Changer le droit de partage',
            'Stop sharing'                        : 'Arrêter le partage',
            'Date'                                : 'Date',
            'Default Cache (0 files, 0 B)'        : 'Cache par défaut (0 fichiers, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Avatars (0 fichiers, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Favicon (0 fichiers, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Aperçus (0 fichiers, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Mots de passe (0 fichiers, 0 B)',
            'Backup or export'                    : 'Sauvegarde/Export',
            'Choose Format'                       : 'Choisissez un format',
            'Please choose'                       : 'Merci de choisir',
            'Database Backup'                     : 'Sauvegarde de la base de données',
            'Predefined CSV'                      : 'Ficher CSV pré-défini',
            'Backup password'                     : 'Mot de passe de la sauvegarde',
            '(Optional) Encrypts the backup'      : '(Optionnel) Chiffrer le ficher de sauvegarde',
            'The import only supports CSV'        : 'Seul un CSV peut être utilisé pour l’import',
            'Export Passwords'                    : 'Exporter les mots de passe',
            'Export Folders'                      : 'Exporter les fichiers',
            'Export Tags'                         : 'Exporter les étiquettes',
            'FolderLabel'                         : 'Dossier',
            'TagLabels'                           : 'Étiquette',
            'ParentLabel'                         : 'Parent',
            'FolderId'                            : 'Id du dossier',
            'TagIds'                              : 'Ids des étiquettes',
            'ParentId'                            : 'Id du parent',
            'Empty'                               : 'Vide',
            'Add Header Line'                     : 'Ajouter un en-tête',
            'Export passwords shared with me'     : 'Exporter les mots de passe partagés avec moi',
            'Don\'t edit passwords shared with me': 'Ne pas éditer les mots de passe partagés avec moi',
            'Run Export'                          : 'Lancer l’export',
            'Export'                              : 'Export',
            'Waiting...'                          : 'En attente…',
            'Export error'                        : 'Erreur lors de l’export',
            'Download {format}'                   : 'Télécharger le ficher {format}',
            'Nothing to export'                   : 'Rien à exporter',
            'There is no data to export'          : 'Il n’y a aucune donnée à exporter',
            'Restore or import'                   : 'Restauration/Import',
            'Passwords CSV'                       : 'CSV des mots de passe',
            'Folder CSV'                          : 'CSV des dossiers',
            'Tags CSV'                            : 'CSV des étiquettes',
            'Custom CSV'                          : 'CSV personnalisé',
            'Select File'                         : 'Sélectionner un ficher',
            'Select Options'                      : 'Choisissez les options',
            'Conflict handling'                   : 'Gestion des conflits',
            'Skip if same revision'               : 'Ignorer si n° de version identique',
            'Skip always'                         : 'Toujours ignorer',
            'Overwrite existing'                  : 'Écraser l’existant',
            'Merge with existing'                 : 'Fusionner avec l’existant',
            'Create new entry'                    : 'Créer une nouvelle entrée',
            'For encrypted backups'               : 'Nécessaire pour les sauvegardes chiffrées',
            'CSV Options'                         : 'Options CSV',
            'Database'                            : 'Base de données',
            'Quote Character'                     : 'Séparateur de chaîne de caractères',
            'Escape Character'                    : 'Caractère d’échappement',
            'Field delimiter'                     : 'Séparateur de champ',
            'Quote'                               : 'Apostrophe',
            'Single Quote'                        : 'Apostrophe simple',
            'Backslash'                           : 'Barre oblique inversée',
            'Detect'                              : 'Detecter automatiquement',
            'Comma'                               : 'Virgule',
            'Semicolon'                           : 'Point-virgule',
            'Space'                               : 'Espace',
            'Tab'                                 : 'Tabulation',
            'Detect unescaped quotes'             : 'Détecter les apostrophes non échappées',
            'Skip first line'                     : 'Sauter la première ligne',
            'Interpolate missing fields'          : 'Interpoler les champs manquants',
            'CSV Field Mapping'                   : 'Attribuer des champs CSV',
            'Preview Line'                        : 'Aperçus de la première ligne',
            'Line {line}'                         : 'Ligne {line}',
            'Ignore'                              : 'Ignorer',
            'Changed'                             : 'Changé',
            'Modified'                            : 'Modifié',
            'Edited'                              : 'Édité',
            'Created'                             : 'Crée',
            'Folder'                              : 'Dossier',
            'Revision'                            : 'Révision',
            'Url'                                 : 'Lien',
            'Parent'                              : 'Parent',
            'Run Import'                          : 'Lancer l’import',
            'Import'                              : 'Importer',
            'Parsing input file'                  : 'Analyse du fichier téléversé',
            'Analyzing tags'                      : 'Analyse des étiquettes',
            'Analyzing folders'                   : 'Analyse des dossiers',
            'Reading tags'                        : 'Lecture des étiquettes',
            'Importing tags'                      : 'Import des étiquettes',
            'Reading folders'                     : 'Lecture des dossiers',
            'Importing folders'                   : 'Import des dossiers',
            'Reading passwords'                   : 'Lecture des mots de passe',
            'Importing passwords'                 : 'Import des mots de passe',
            'Import failed'                       : 'Échec de l’import',
            'Import partially failed'             : 'Import partiellement réussi',
            'Import successful'                   : 'Import réussi',
            'Import error'                        : 'Erreur lors de l’import',
            'Invalid file type "{type}"'          : 'Format de ficher invalide "{type}"',
            'Password required'                   : 'Un mot de passe requis',
            'Password invalid'                    : 'Mot de passe erroné',
            'Failed to decrypt passwords'         : 'Déchiffrement des mots de passe échoué',
            'Failed to decrypt folders'           : 'Déchiffrement des dossiers échoué',
            'Failed to decrypt tags'              : 'Déchiffrement des étiquettes échoué',
            'CSV file can not be mapped'          : 'Le fichier CSV ne peut pas être cartographié',
            'Delete All Items'                    : 'Effacer tous les éléments',
            'Restore All Items'                   : 'Restaurer tous les éléments',
            'Restore Items'                       : 'Restaure les éléments',
            'Restore all items in trash?'         : 'Restaurer les éléments contenus dans la corbeille',
            'Restore this item'                   : 'Restaurer cet élément',
            'Items restored'                      : 'Élément restauré',
            'Empty Trash'                         : 'Vider la corbeille',
            'Delete all items in trash?'          : 'Effacer définitivement tout les éléments de la corbeille ?',
            'Trash emptied'                       : 'Corbeille vidée',
            'Search'                              : 'Recherche',
            'Use the search box to search'        : 'Utilise la boite de recherche afin de procéder à la recherche',
            'Search everywhere for "{query}"'     : 'Tenter une cherche globale pour "{query}"',
            'Settings'                            : 'Options',
            'Password Rules'                      : 'Politique de mots de passe',
            'Mark duplicates'                     : 'Signaler les dupliqués',
            'Maximum age in days'                 : 'Age maximum en jours',
            'Password Generator'                  : 'Générateur de mots de passe',
            'Password strength'                   : 'Complexité',
            'Include numbers'                     : 'Inclure des chiffres',
            'Include special characters'          : 'Inclure des caractères spéciaux',
            'User Interface'                      : 'Interface utilisateur',
            'Initial section'                     : 'Section par défaut',
            'All Passwords'                       : 'Tous les mots de passe',
            'Passwords List View'                 : 'Liste des mots de passe',
            'Set title from'                      : 'Définir le titre par',
            'Sort by'                             : 'Trier par',
            'Title field'                         : 'Champs titre',
            'Single click action'                 : 'Action au clique',
            'Double click action'                 : 'Action au double clique',
            'Copy password'                       : 'Copier le mot de passe',
            'Copy username'                       : 'Copier le nom d’utilisateur',
            'Copy website'                        : 'Copier le lien',
            'Show details'                        : 'Montrer les détails',
            'Add copy options in menu'            : 'Ajout des choix de copie dans le menu',
            'Show username in list view'          : 'Ajout de l’utilisateur dans la liste',
            'Show tags in list view'              : 'Ajout des étiquettes dans la liste',
            'Show hidden custom fields'           : 'Montrer les champs personnalisés cachés',
            'Search as i type'                    : 'Recherche pendant la frappe',
            'Search everywhere with Enter'        : 'Recherche globale avec "Entrée"',
            'Always show search section'          : 'Toujours montrer la recherche',
            'Notifications'                       : 'Notifications',
            'Send Emails for'                     : 'Envoyer un courriel pour',
            'Security issues'                     : 'En cas de problème de sécurité',
            'Passwords shared with me'            : 'En cas d’un partage avec moi',
            'Show Notifications for'              : 'Montrer notification pour',
            'Other errors'                        : 'Erreurs diverses',
            'Danger Zone'                         : 'Zone à risque',
            'Reset all settings'                  : 'Réinitialiser tous les paramètres',
            'Reset'                               : 'Réinitialiser',
            'Delete everything'                   : 'Tout effacer',
            'DELETE EVERYTHING'                   : 'TOUT EFFACER',
            'Account reset requested'             : 'Réinitialisation du compte requis',
            'View'                                : 'Vue',
            'Default'                             : 'Standard',
            'Advanced'                            : 'Avancée',
            'There is nothing here'               : 'Il n’y a rien ici',
            'Click on "+" to add something'       : 'Cliquez sur le symbole "+" pour ajouter un nouvel élément',
            'Deleted items will appear here'      : 'Les éléments supprimés apparaîtront ici',
            'No passwords were shared with you'   : 'Aucun mot de passe n’est partagé avec vous',
            'You did not share any passwords'     : 'Vous n’avez partagé aucun mot de passe pour le moment',
            'Your favorites will appear here'     : 'Vos favoris apparaîtront ici',
            'Better check the other sections'     : 'Vous devriez verifier les autres sections',
            'That\'s probably a good sign'        : 'C’est probablement un bon signe',
            'Go to {href}'                        : 'Aller à {href}',
            'Figure {count}: {title}'             : 'Images {count}: {title}',
            'Unable to fetch page: {message}.'    : 'Impossible d’atteindre la page : {message}.',
            'Not Found'                           : 'Non trouvé',
            'Missing something or found an error?': 'Il vous manque une fonctionnalité ou vous rencontrez une erreur ?',
            'Tell us!'                            : 'Faites nous en part !',
            'Still need help?'                    : 'Toujours besoin d’aide ?',
            'Ask in our forum!'                   : 'Demandez sur le forum !',
            'Found an error?'                     : 'Vous avez trouvé une erreur ?',
            'Network error'                       : 'Erreur réseau',
            'Unable to load {module}'             : 'Le module {module} n’a pas pu être chargé',
            'Sort by name'                        : 'Trier par nom',
            'Sort by modified date'               : 'Trier par date de modification',
            '{passwords} passwords'               : '{passwords} mots de passe',
            '1 password'                          : '1 mot de passe',
            '{folders} folders'                   : '{folders} dossiers',
            '1 folder'                            : '1 dossier',
            '{tags} tags'                         : '{tags} étiquettes',
            '1 tag'                               : '1 étiquette',
            'Nothing'                             : 'Rien',
            ' and '                               : ' et ',
            'match'                               : 'correspond à',
            'matches'                             : 'correspondent à',
            'true'                                : 'vrai',
            'false'                               : 'faux',
            'yes'                                 : 'oui',
            'no'                                  : 'non'
        },
        helpTexts    = {
            'Mark passwords as weak if they are being used for multiple accounts'        : 'Marque les mots de passe comme "Faible" lorsqu’ils sont utilisés plusieurs fois pour différents comptes',
            'Mark passwords as weak if they surpass the specified amount of days'        : 'Marque les mots de passe comme "Faible" quand ils dépassent une durée limite spécifiée en jours',
            'A higher strength results in longer, more complex passwords'                : 'Une complexité plus élevée produira des mots de passe plus longs et plus sécurisés',
            'Show the selected property as title in the list view'                       : 'Affiche l’attribut sélectionné comme titre dans la liste',
            'Sorts passwords by the selected property when sorting by name is selected'  : 'Trie les mots de passe en fonction de l’attribut spécifié au lieu du nom',
            'Action to perform when clicking on a password in the list view'             : 'Action exécutée en cliquant sur un mot de passe dans la liste',
            'Action to perform when double clicking on a password in the list view'      : 'Action exécutée lorsque vous double-cliquez sur un mot de passe dans la liste',
            'Shows options to copy the password and user name in the menu'               : 'Affiche les options pour copier le mot de passe et le nom d’utilisateur dans le menu.',
            'The initial section to be shown when the app is opened'                     : 'La section qui sera affichée à l’ouverture de l’application',
            'Always show the username related to the password in the list view'          : 'Toujours afficher le nom d’utilisateur lié au mot de passe dans la liste',
            'Show the tags for each password in the list view. Increases loading times'  : 'Affiche les balises pour chaque mot de passe dans la vue liste. Augmente le temps de chargement',
            'Show hidden custom fields in the edit form and detail section of a password': 'Affiche les champs personnalisés cachés dans le formulaire de modification et dans les détails du mot de passe',
            'Start search when a key is pressed anywhere on the page'                    : 'Commence la recherche dès qu’une touche est enfoncée',
            'Search everywhere when the enter key is pressed in the search box'          : 'Effectuez une recherche n’importe où lorsque vous appuyez sur la touche Entrée dans la zone de recherche',
            'Always show the section for global search in the navigation'                : 'Toujours afficher la section de recherche globale dans la navigation',
            'Sends you e-mails about compromised passwords and other security issues'    : 'Vous envoie un courriel si un mot de passe est compromis ou que des problèmes de sécurité se produisent',
            'Sends you e-mails when other people share passwords with you'               : 'Vous envoie un courriel quand des mots de passe vous sont partagés',
            'Notifies you about compromised passwords and other security issues'         : 'Envoie une notification si un mot de passe est compromis ou que des problèmes de sécurité se produisent',
            'Notifies you when other people share passwords with you'                    : 'Envoie une notification quand des mots de passe vous sont partagés',
            'Notifies you when a background operation fails'                             : 'Envoie une notification quand une tache en arrière plan échoue',
            'Reset all settings on this page to their defaults'                          : 'Réinitialise tous les paramètres de cette page à leur valeur de défaut',
            'This will reset all settings to their defaults. Do you want to continue?'   : 'Cela réinitialisera tous les paramètres à leurs valeurs par défaut. Voulez-vous continuer ?',
            'Start over and delete all configuration, passwords, folders and tags'       : 'Restaurer les paramètres d’usine et supprimer tous les mots de passe, dossiers et étiquettes',
            'You have reached the maximum length of 4096 characters'                     : 'Vous avez atteint la longueur maximale de 4096 caractères',
            'Invalid trailing quote in quoted field'                                     : 'Le caractère de fin de champ est incorrecte',
            'We could not find anything for "{query}"'                                   : 'Rien n’à été trouvé pour la recherche "{query}"',
            'The file could not be parsed: {errors}'                                     : 'Le fichier n’a pas pu être traité : {errors}',
            'You have to wait {seconds} seconds before you can reset your account.'      : 'Vous devez attendre {seconds} secondes avant de pouvoir réinitialiser votre compte.',
            'The page "{page}" could not be fetched from the handbook server.'           : 'La page "{page}" n’a pas pu être extraite du  serveur hébergeant le manuel.',
            'Some data is waiting to be synchronized'                                    : 'Certaines données attendent d’être synchronisées',
            '{message} in line {line} character {character}.'                            : '{message} ligne {line}, colonne {character}.'
        },
        longTexts    = {
            'The file has the type "{actual}" but "{expected}" is expected. You might have chosen the wrong file or importer.' : 'Le fichier est de type "{actual}" mais "{expected}" était attendu. Vous vous êtes trompé de ficher ou de choix juste avant.',
            'Do you want to delete all your settings, passwords, folders and tags?\nIt will NOT be possible to undo this.'     : 'Êtes-vous sûr de vouloir supprimer tous vos paramètres, mots de passe, dossiers et étiquettes et recommencer depuis le début ? \nCette action n’est PAS réversible.',
            '{service} is known to to generate faulty export files. Consult the manual for help if the file can not be parsed.': '{service} est connu pour créer des fichiers d’exportation erronés. Consultez le manuel si le fichier ne peut pas être traité.'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts),
        'nplurals=2; plural=(n != 1);'
    );
}());
