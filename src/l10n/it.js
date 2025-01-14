(function() {
    let translations = {
            'Passwords'                           : 'Password',
            'All'                                 : 'Tutte',
            'Folders'                             : 'Cartella',
            'Recent'                              : 'Recenti',
            'Favorites'                           : 'Preferite',
            'Shared'                              : 'Condivise',
            'Tags'                                : 'Etichetta',
            'Security'                            : 'Sicurezza',
            'Trash'                               : 'Cestino',
            'Details'                             : 'Dettagli',
            'Edit'                                : 'Modifica',
            'Rename'                              : 'Rinomina',
            'Delete'                              : 'Cancella',
            'Restore'                             : 'Ripristina',
            'New Password'                        : 'Nuova password',
            'New Folder'                          : 'Nuova cartella',
            'New Tag'                             : 'Nuova etichetta',
            'Secure'                              : 'Sicura',
            'Status'                              : 'Stato',
            'Weak'                                : 'Debole',
            'Weak (Duplicate)'                    : 'Debole (Duplicata)',
            'Weak (Outdated)'                     : 'Debole (Vecchia)',
            'Breached'                            : 'Violata',
            'Notes'                               : 'Note',
            'Share'                               : 'Condividi',
            'Revisions'                           : 'Versione',
            'QR Code'                             : 'Codice QR',
            'Password'                            : 'Password',
            'Username'                            : 'Utente',
            'Website'                             : 'Sito web',
            'Add Tags...'                         : 'Aggiungi etichetta...',
            'Color'                               : 'Colore',
            'Name'                                : 'Nome',
            'Label'                               : 'Etichetta',
            'General'                             : 'Generale',
            'Properties'                          : 'Proprietà',
            'Numbers'                             : 'Numeri',
            'Special Characters'                  : 'Caratteri speciali',
            'More Options'                        : 'Opzioni avanzate',
            'Close'                               : 'Chiudi',
            'Favorite'                            : 'Preferita',
            'Encryption'                          : 'Crittografia',
            'On the server'                       : 'Sul server',
            'Custom Fields'                       : 'Campi personalizzati',
            'Secret'                              : 'Segreto',
            'Text'                                : 'Testo',
            'File'                                : 'File',
            'Value'                               : 'Valore',
            'Toggle visibility'                   : 'Cambia visibilità',
            'Generate password'                   : 'Genera password',
            'Simple Server Side Encryption V1'    : 'Crittografia lato Server Semplice V1',
            'Take some notes'                     : 'Scrivi delle note',
            'Save'                                : 'Salva',
            'Create folder'                       : 'Crea cartella',
            'Folder created'                      : 'Creata cartella',
            'Creating folder failed'              : 'Creazione cartella fallita',
            'Rename folder'                       : 'Rinomina cartella',
            'Folder renamed'                      : 'Cartella rinominata',
            'Renaming folder failed'              : 'Impossibile rinominare cartella',
            'Folder moved'                        : 'Cartella spostata',
            'Moving folder failed'                : 'Impossibile spostare cartella',
            'Delete folder'                       : 'Cancella cartella',
            'Do you want to delete the folder'    : 'Desideri cancellare questa cartella?',
            'Folder deleted'                      : 'Cartella cancellata',
            'Deleting folder failed'              : 'Impossibile cancellare cartella',
            'Folder restored'                     : 'Cartella recuperata',
            'Restoring folder failed'             : 'Impossibile recuperare cartella',
            'Create tag'                          : 'Crea etichetta',
            'Tag created'                         : 'Etichetta creata',
            'Creating tag failed'                 : 'Impossibile creare etichetta',
            'Edit tag'                            : 'Modifica etichetta',
            'Generate random color'               : 'Genera un colore casuale',
            'Tag saved'                           : 'Etichetta salvata',
            'Saving tag failed'                   : 'Impossibile salvare etichetta',
            'Delete tag'                          : 'Cancella etichetta',
            'Do you want to delete the tag'       : 'Desideri cancellare questa etichetta?',
            'Tag deleted'                         : 'Etichetta cancellata',
            'Deleting tag failed'                 : 'Impossibile cancellare etichetta',
            'Tag restored'                        : 'Etichetta recuperata',
            'Restoring tag failed'                : 'Impossibile recuperare etichetta',
            'Create password'                     : 'Crea nuova password',
            'Password created'                    : 'Password creata',
            'Creating password failed'            : 'Impossibile creare password',
            'Edit password'                       : 'Modifica password',
            'Password saved'                      : 'Password salvata',
            'Saving password failed'              : 'Impossibile salvare la password',
            'Password moved'                      : 'Password spostata',
            'Moving password failed'              : 'Impossibile spostare la password',
            'Delete password'                     : 'Cancella password',
            'Do you want to delete the password'  : 'Vuoi cancellare questa password?',
            'Password deleted'                    : 'Password cancellata',
            'Password restored'                   : 'Password recuperata',
            'Restoring password failed'           : 'Impossibile recuperare la password',
            'Open Url'                            : 'Apri sito web',
            'Copy Url'                            : 'Copia sito web',
            'Copy User'                           : 'Copia utente',
            'Copy Password'                       : 'Copia password',
            '{element} was copied to clipboard'   : '{element} copiata negli appunti',
            'Error copying {element} to clipboard': 'Impossibile copiare {element} negli appunti',
            'Last modified on {date}'             : 'Ultima modifica il {date}',
            'Restore revision'                    : 'Recupera revisione',
            'Revision restored'                   : 'Revisione recuperata',
            'Restoring revision failed'           : 'Impossibile recuperare la revisione',
            'Do you want to restore the revision?': 'Vuoi recuperare questa revisione?',
            'Shared with you'                     : 'Condivise con me',
            'Shared by you'                       : 'Condivise da me',
            'Statistics'                          : 'Statistiche',
            'Created on'                          : 'Creata il',
            'Last updated'                        : 'Ultima versione',
            '{count} revisions'                   : '{count} versioni',
            'Shares'                              : 'Condivisioni',
            '{count} shares'                      : 'Condivisa {count} volte',
            'Encryption applied on server'        : 'Cifrato lato server',
            'Encryption applied on client'        : 'Cifrato lato client',
            'No encryption'                       : 'Sin cifrado',
            'Simple encryption (Gen. 1)'          : 'Crittografia semplice (Generazione 1)',
            'Simple encryption (Gen. 2)'          : 'Crittografia semplice (Generazione 2)',
            'Advanced encryption (SSE V2)'        : 'Crittografia avanzata (SSE V2)',
            'Encryption with libsodium'           : 'Crittografia con libsodium',
            'More'                                : 'Di più',
            'Backup and Restore'                  : 'Backup e Ripristino',
            'Settings'                            : 'Impostazioni',
            'Handbook'                            : 'Manuale di istruzioni',
            'Apps and Extensions'                 : 'App e estensioni',
            '{editable} and {shareable}.'         : '{editable} e {shareable}.',
            'Editing allowed'                     : 'Modifica permessa',
            'Editing disallowed'                  : 'Modifica non permessa',
            'sharing allowed'                     : 'Condivisione consentita',
            'sharing disallowed'                  : 'Condivisione non consentita',
            'Search user'                         : 'Cerca utente',
            'Set expiration date'                 : 'Imposta data di scadenza',
            'Expires {dateTime}'                  : 'Scade {dateTime}',
            'Choose expiration date'              : 'Seleziona data di scadenza',
            'Please choose a date in the future'  : 'Per favore, seleziona una data in futuro',
            'Invalid date'                        : 'Data non valida',
            'The user {uid} does not exist'       : 'L\'utente {uid} non esiste',
            'Unable to share password: {message}' : 'Non è possibile condividere la password: {message}',
            'Toggle write permissions'            : 'Cambia permessi scrittura',
            'Toggle share permissions'            : 'Cambia permessi condivisione',
            'Stop sharing'                        : 'Annulla condivisione',
            'Date'                                : 'Data',
            'Default Cache (0 files, 0 B)'        : 'Cache predefinita (0 file, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Cache avatar (0 file, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Cache favicon (0 file, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Cache anteprime (0 file, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Cache password (0 file, 0 B)',
            'Changed'                             : 'Cambiata',
            'Modified'                            : 'Modificata',
            'Edited'                              : 'Modificata',
            'Created'                             : 'Creata',
            'Folder'                              : 'Cartella',
            'Revision'                            : 'Versione',
            'Url'                                 : 'Sito web',
            'Parent'                              : 'Cartella superiore',
            'Delete All Items'                    : 'Cancella tutti gli oggetti',
            'Restore All Items'                   : 'Recupera tutti gli oggetti',
            'Restore Items'                       : 'Recupera oggetti',
            'Restore all items in trash?'         : 'Vuoi recuperare tutti gli oggetti del cestino?',
            'Restore this item'                   : 'Recupera questo oggetto',
            'Items restored'                      : 'Oggetti recuperati',
            'Empty Trash'                         : 'Svuota cestino',
            'Delete all items in trash?'          : 'Vuoi cancellare permanentemente tutti gli oggetti nel cestino?',
            'Trash emptied'                       : 'Cestino svuotato',
            'Search'                              : 'Cerca',
            'Use the search box to search'        : 'Usa la barra di ricerca per cercare',
            'Search everywhere for "{query}"'     : 'Cerca "{query}" globalmente',
            'There is nothing here'               : 'Qui non c\'è nulla',
            'Click on "+" to add something'       : 'Clicca su "+" per aggiungere qualcosa',
            'Deleted items will appear here'      : 'Oggetti cancellati appariranno qui',
            'No passwords were shared with you'   : 'Nessuno condivide password con te',
            'You did not share any passwords'     : 'Non stai condividendo nessuna password',
            'Your favorites will appear here'     : 'I tuoi preferiti appariranno qui',
            'Better check the other sections'     : 'Meglio controllare le altre sezioni',
            'That\'s probably a good sign'        : 'Probabilment è un buon segno',
            'Go to {href}'                        : 'Vai a {href}',
            'Contents'                            : 'Contenuti',
            'Figure {count}: {title}'             : 'Immagine {count}: {title}',
            'Unable to fetch page: {message}.'    : 'Impossibile recuperare la pagina: {message}.',
            'Invalid content type {mime}'         : 'Tipo di contenuto invalido {mime}',
            'No content available'                : 'Contenuto non disponibile',
            'Not Found'                           : 'Pagina non trovata',
            'Still need help?'                    : 'Serve aiuto?',
            'Ask in our forum!'                   : 'Chiedi nel nostro forum!',
            'Found an error?'                     : 'Hai trovato un errore?',
            'Tell us!'                            : 'Faccelo sapere!',
            'The session has expired'             : 'La sessione è scaduta',
            'API Session Token expired'           : 'Il token della API è scaduto',
            'Network error'                       : 'Errore di rete',
            'Unable to load {module}'             : 'Non è stato possibile caricare il modulo {module}. Controllare la connessione al server Nextcloud',
            'Sort by name'                        : 'Ordina per numero',
            'Sort by modified date'               : 'Ordina per data di modifica',
            '{passwords} passwords'               : '{passwords} password',
            '1 password'                          : '1 password',
            '{folders} folders'                   : '{folders} cartelle',
            '1 folder'                            : '1 cartella',
            '{tags} tags'                         : '{tags} etichiette',
            '1 tag'                               : '1 etichetta',
            'Nothing'                             : 'Niente',
            ' and '                               : ' e ',
            'match'                               : 'coincidenza',
            'matches'                             : 'coincide con',
            'Created by'                          : 'Creato da',
            'You are logging in as {user}'        : 'Sei connesso come {user}',
            'Login'                               : 'Entra',
            'Request token again'                 : 'Richiedi nuovamente il token',
            'Too many attempts'                   : 'Troppi tentativi',
            'Password is too short'               : 'Password troppo corta',
            'Password invalid'                    : 'Password non valida',
            'Unknown Error'                       : 'Errore sconosciuto',
            'Token request failed'                : 'Richiesta del token fallita',
            'CLIENT::MAINTENANCE'                 : 'Sistema di manutenzione',
            'CLIENT::UNKNOWN'                     : 'Sconosciuto',
            'CLIENT::SYSTEM'                      : 'Sistema',
            'CLIENT::PUBLIC'                      : 'Pubblico',
            'CLIENT::CRON'                        : 'Attività automatiche in secondo piano',
            'CLIENT::CLI'                         : 'Linea di comando del server',
            'Please correct your input'           : 'Per favore, correggi questo valore',
            'Show value'                          : 'Mostra valore',
            'Cancel'                              : 'Cancella',
            'Ok'                                  : 'Ok',
            'true'                                : 'vero',
            'false'                               : 'falso',
            'yes'                                 : 'si',
            'no'                                  : 'no'
        },
        helpTexts    = {
            '{name} has shared this password with you.'                       : '{name} ha condiviso questo con te.',
            'You have reached the maximum length of 4096 characters'          : 'Hai raggiunto la lunghezza massima di 4096 caratteri',
            'We could not find anything for "{query}"'                        : 'Non sono riuscito a trovare nulla per "{query}"',
            'The page "{page}" could not be fetched from the handbook server.': 'La pagina "{page}" non è stata in grado di essere scaricata dal server di manuali.',
            'Some data is waiting to be synchronized'                         : 'Alcuni dati sono in attesa di sincronizzazione',
            'You will be logged out in {time} seconds'                        : 'La tua sessione scadrà in {time} secondi',
            'You may have requested too many tokens. Please try again later.' : 'Hai richiesto troppi token. Riprova più tardi.'
        },
        longTexts    = {
            'End-to-End encryption will be disabled for this password if you share it.'                : 'La cifratura end-to-end verrà disabilitata per questa password se la condividi.',
            'The session token is no longer valid. The app will now reload.'                           : 'Il token di sessione non è più valido. Questa app verrà riavviata.',
            'Today in 2018, the first version of passwords was published. Thank you for using the app.': 'Oggi nel 2018, la prima versione della app Passwords venne pubblicata. Grazie per usare l\'app.'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts),
        'nplurals=2; plural=(n != 1);'
    );
}());
