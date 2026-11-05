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
- ⬜ C2 Partage du Sheet « Tout le monde avec le lien · Éditeur » : à fermer au transfert (étape Théo 3)
- ⬜ Transfert à Carla (ci-dessous)

## 3. Transfert à Carla (≈ 15 min, sans Claude)

**Théo**
1. Ouvre le Sheet → **Extensions → Apps Script** → ⏰ **Déclencheurs** → supprime tes déclencheurs (⋮ → Supprimer).
2. Sheet → **Partager** → ajoute l'adresse Gmail de Carla en **Éditeur** → à droite de son nom → **Transférer la propriété** → **Envoyer l'invitation**.
3. Dans la même fenêtre, « Accès général » → **Limité** (plus personne d'autre avec le lien).

**Carla** (sur ordinateur de préférence)
1. E-mail « Invitation à devenir propriétaire » → **Accepter**.
2. Sheet → **Extensions → Apps Script** → en haut, choisis **`installer`** → **Exécuter** → **Examiner les autorisations** → ton compte → **Paramètres avancés** → **Accéder à … (non sécurisé)** → **Autoriser**. Tu reçois un mail avec ta **clé d'accès**.
3. **Déployer → Nouveau déploiement** → roue ⚙️ → **Application Web** → Exécuter en tant que : **Moi** · Qui a accès : **Tout le monde** → **Déployer** → copie l'URL (finit par `/exec`).
4. Dans l'appli : ⚙️ **Réglages** → **Changer d'adresse ou de clé** → colle la nouvelle adresse et ta clé → **Ouvrir le carnet**.
5. Sheet → **Partager** → retire Théo.

**Vérifier** : Réglages → « Mail d'échéance : ✅ actif » → bouton **mail de test** : il arrive chez Carla.

| Problème | Solution |
|---|---|
| « Connexion impossible » | Étape 3 : **Qui a accès : Tout le monde**, et l'adresse finit par `/exec`. |
| « Clé incorrecte » | Reprendre la clé du mail reçu à l'étape 2. |
| Mail d'échéance « inactif » | Refaire l'étape 2 (`installer`). |

## 4. Journal

| Date | Quoi |
|---|---|
| 05/11/2026 | Appli 1.8.3 + script 1.8.1 (version Google 2) : C1, C3–C6. Fiche de transfert. |
