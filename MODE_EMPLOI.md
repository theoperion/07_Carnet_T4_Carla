# Carnet d'entretien · T4 (Carla) · mode d'emploi

> Appli : https://theoperion.github.io/07_Carnet_T4_Carla/ · Sheet « Carnet d'entretien - Appartement Carla »
> Copie du **Carnet T3** de Théo (version 1.8), **sans inventaire** ni ce qui touche aux biens de la maison : entretien, historique, consommables, contacts, trophées.

## 1. Règles

- **Un seul numéro de version** : `version.js` (change aussi le hors connexion).
- Le script Google est rangé dans le dépôt privé `app_scripts/carnet-t4-carla` (mise en ligne : `clasp push`, puis `outils/deployer.py "…"` ; l'adresse ne change jamais).
- **Mails d'échéance** : **un seul mail par tâche et par échéance**, jamais de relance. **Coupés tant que le fichier est chez Théo** (il ne reçoit rien) ; ils partent chez Carla dès qu'elle a lancé `installer` après le transfert.
- Les tâches se modifient directement dans l'onglet **🔧 Entretien** du Sheet (zone, élément, intervention, fréquence, outils).

## 2. Feuille de route

- ✅ C1 Mails coupés chez Théo (script 1.8.1)
- ✅ C3 Lien de l'appli dans les mails corrigé (`07_Carnet_T4_Carla`)
- ✅ C4 Nom « Carnet T4 » et hors connexion séparé : n'efface plus celui de Versus ni du Carnet T3
- ✅ C5 Calée sur le Carnet T3 1.8 : mise à jour fiable, envois jamais perdus ni en double, clé hors de l'adresse, mail une seule fois
- ✅ C6 Ménage : ~330 lignes d'inventaire retirées, mode d'emploi, un seul numéro de version, coche ✓ au centre (onglet Trophées ajouté)
- ⏸ C2 Partage du Sheet « Tout le monde avec le lien · Éditeur » : **laissé ouvert exprès** (Théo n'a pas encore l'adresse Gmail de Carla, c'est son seul accès au Sheet). À fermer au transfert (étape Théo 3).
- ⬜ Transfert à Carla (ci-dessous)

## 3. Transfert à Carla (Sheet + script + appli, sans Claude)

> Même texte que la fiche PDF (`FICHE_TRANSFERT_CARLA.pdf` du dépôt 00_VS_Portefeuille).

> Durée : 5 min pour Théo, 15 min pour Carla. **Aucun besoin de Claude.**
> Après : le Sheet, son script **et l'appli** sont à elle seule ; ses **mails de rappel arrivent chez elle** (un seul par tâche, sans relance). Tant que le fichier est chez Théo, aucun mail ne part.

### Avant le jour J · Carla

1. Créer un compte GitHub gratuit (github.com → **Sign up**) et donner à Théo son **nom d'utilisateur** et son **adresse Gmail**.

### Jour J · 1. Théo (≈ 5 min)

**Le Sheet**

1. Ouvre « Carnet d'entretien - Appartement Carla » → **Extensions → Apps Script** → à gauche **⏰ Déclencheurs** → supprime **tes** déclencheurs (⋮ → Supprimer).
2. Reviens au Sheet → **Partager** → ajoute le Gmail de Carla en **Éditeur** → **Envoyer**.
3. Dans la même fenêtre, à droite de son nom → menu → **Transférer la propriété** → **Envoyer l'invitation**.
4. Toujours dans **Partager**, « Accès général » → **Limité** → **OK**.

**L'appli**

5. Sur github.com, ouvre le dépôt `07_Carnet_T4_Carla` → **Settings** → tout en bas, **Danger Zone → Transfer ownership** → tape le nom GitHub de Carla → confirme.

### Jour J · 2. Carla (≈ 15 min, sur ordinateur de préférence)

**Le Sheet et son script**

1. **Accepter** : e-mail « Invitation à devenir propriétaire » → **Accepter**.
2. **Autoriser son script** : Sheet → **Extensions → Apps Script** → en haut, choisis **`installer`** → **Exécuter** → **Examiner les autorisations** → ton compte → **Paramètres avancés** → **Accéder à … (non sécurisé)** → **Autoriser**. Tu reçois un mail « ta clé d'accès » : garde-le.
3. **Créer ton adresse** : en haut à droite **Déployer → Nouveau déploiement** → roue ⚙️ → **Application Web** → Exécuter en tant que : **Moi** · Qui a accès : **Tout le monde** → **Déployer** → **copie l'URL** (elle finit par `/exec`).

**L'appli**

4. **Accepter le dépôt** : e-mail de GitHub → accepte le transfert.
5. **Mettre l'appli en ligne** : dans le dépôt → **Settings → Pages** → Source : **Deploy from a branch**, branche **main**, dossier **/ (root)** → **Save**. Après 1 à 2 min : `https://ton-nom.github.io/07_Carnet_T4_Carla/`
6. **Sur le téléphone** : ouvre cette nouvelle adresse → à l'écran de connexion, remplace le lien proposé par ton lien `/exec` (étape 3), tape ta clé → **Ouvrir le carnet**. Puis **Partager → Sur l'écran d'accueil**. Supprime l'ancienne icône.
7. **Retirer Théo** : Sheet → **Partager** → à côté de Théo → **Supprimer l'accès** → **Enregistrer**.

### Vérifier

- Appli → ⚙️ Réglages → « Mail d'échéance : **✅ actif** » (et plus « en pause ») → bouton **mail de test** : il arrive chez Carla, et son bouton ouvre **sa** nouvelle adresse.

### Si quelque chose coince

| Problème | Solution |
|---|---|
| « Connexion impossible » | Étape 3 : **Qui a accès : Tout le monde**, et l'adresse finit par `/exec`. |
| « Clé incorrecte » | Reprendre la clé du mail reçu à l'étape 2. |
| La nouvelle adresse affiche « 404 » | Attendre 2 min, puis vérifier **Settings → Pages** (branche main, dossier / (root)). |
| Mail « inactif » ou toujours « en pause » | Refaire l'étape 2 (`installer`), puis l'étape 6. |
| Changer d'adresse plus tard | ⚙️ Réglages → **Changer d'adresse ou de clé**. |
| Faire corriger l'appli plus tard | Claude ne peut plus intervenir depuis le compte de Théo : Carla demande à Claude depuis son propre compte, ou ajoute Théo comme collaborateur du dépôt (Settings → Collaborators). |

## 4. Journal

| Date | Quoi |
|---|---|
| 05/11/2026 | Appli 1.8.3 + script 1.8.1 (version Google 2) : C1, C3–C6. Fiche de transfert. |
| 05/11/2026 | Appli 1.8.4 + script 1.8.2 (version Google 3) : le lien des mails suit l'adresse de l'appli ; fiche : transfert du dépôt GitHub |
