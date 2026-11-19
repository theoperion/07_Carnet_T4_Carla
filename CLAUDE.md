# Carnet T4 (Carla) — passation pour Claude

À lire avant toute action, puis lire **`MODE_EMPLOI.md`** (règles, feuille de route, transfert à Carla, journal).
Ce fichier remplace la mémoire des conversations précédentes (jusqu'au 18/11/2026).

## Qui, comment
- **Théo** (GitHub `theoperion`) gère ce carnet pour **Carla**, à qui tout sera transféré. Répondre **en français**, simplement.
- **Méthode** : Claude propose → Théo valide → Claude fait, teste, publie (ligne dans le journal de `MODE_EMPLOI.md`) → Théo vérifie.
- C'est une copie du **Carnet T3** de Théo (dépôt `03_carnet_d_entretien`) **sans inventaire** : entretien, historique,
  consommables, contacts, trophées. Une correction utile faite sur le T3 doit en général être reportée ici (et inversement).

## Façon de travailler avec Théo (demandée par Théo le 19/11/2026, valable pour TOUTES les conversations)
- **Être force de proposition** : à chaque échange, proposer de soi-même des idées, des améliorations et des pistes originales, pas seulement exécuter ce qui est demandé.
- **Être innovant et ambitieux** (« pousser l'IA et le code dans leurs retranchements ») et **challenger Théo** : donner un avis franc, dire quand une idée peut être meilleure, proposer une alternative.
- **Travailler ensemble** : Claude propose → Théo choisit et valide → Claude construit. Après chaque étape, relancer avec la suite et 2 ou 3 idées nouvelles.

## Où est quoi
- Appli : ce dépôt (GitHub Pages, **public**) : `index.html`, `sw.js`, `manifest.json`, icônes ; **version** dans `version.js`.
- Script Google : dépôt **privé** `theoperion/app_scripts`, dossier `carnet-t4-carla/`.
  Mise en ligne : `clasp push --force` puis `python3 ../outils/deployer.py "…"` (adresse inchangée ;
  jamais « Nouveau déploiement »). Une fois par machine : `npx -y @google/clasp@3.4.1 login`.
- Données : Sheet « Carnet d'entretien - Appartement Carla » (encore sur le compte Google de Théo).

## Règles
- **Mails d'échéance coupés tant que le fichier est chez Théo** ; ils partiront chez Carla quand elle aura lancé
  `installer` après le transfert. Un seul mail par tâche et par échéance, jamais de relance.
- Partage du Sheet « tout le monde avec le lien » **laissé ouvert exprès** jusqu'au transfert (seul accès de Carla).
- Aucun identifiant / jeton / adresse e-mail dans ce dépôt public.
- Le transfert à Carla se fait **sans Claude**, avec la fiche (section 3 de `MODE_EMPLOI.md`, `FICHE_TRANSFERT_CARLA.pdf`
  dans le dépôt `00_VS_Portefeuille`).

## État au 18/11/2026
Appli 1.8.5, calée sur le Carnet T3. Reste à faire : le transfert à Carla (étapes de Théo puis de Carla).
