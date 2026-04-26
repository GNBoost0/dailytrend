---
title: "Parcoursup piraté pendant 5 mois : 705 000 candidats victimes d'un fiasco silencieux"
description: "Un pirate a siphonné les données personnelles de 705 000 candidats Parcoursup entre octobre 2025 et mars 2026. Cinq mois d'invisibilité totale. Décryptage d'un scandale qui révèle les failles profondes de la cybersécurité publique."
date: "2026-04-24"
topic: "cyber"
tags: ["parcoursup", "fuite de données", "cyberattaque", "services publics"]
image: "/images/articles/parcoursup-pirate-5-mois-705000-donnees-volees.jpg"
author: "DailyTrend"
readingTime: 9
---

Octobre 2025. Des lycéens préparent leurs vœux d'orientation, le ministère de l'Enseignement supérieur gère les flux de la plateforme Parcoursup. Et quelque part, un pirate entre par la grande porte. Pas en forçant un serveur, pas en exploitant une vulnérabilité zero-day. Simplement en récupérant les identifiants d'un agent de la région académique Occitanie. Cinq mois plus tard, en mars 2026, le ministère découvre l'intrusion. **705 000 personnes** ont été touchées. Leurs noms, adresses, numéros de téléphone, parcours scolaires — tout est dans la nature.

## Le scénario d'une intrusion invisible

L'attaque contre Parcoursup n'a rien d'un exploit technique spectaculaire. C'est exactement le contraire qui la rend inquiétante.

Le pirate a utilisé une méthode banale mais redoutable : le **credential stuffing** ou la réutilisation d'identifiants compromis. Avec les codes d'un agent de la région académique Occitanie en main, il s'est connecté à un module interne de gestion des données. Pas d'alarme. Pas de détection anomale. Juste un accès légitime — en apparence.

Une fois dans le système, l'attaquant a pu naviguer librement dans l'outil d'administration et exfiltrer les données des candidats ayant formulé des vœux **ou résidant en Occitanie** lors des sessions 2023 et 2025. 705 000 profils complets.

### Ce qui a été volé

L'étendue des données compromises est vertigineuse :

| Type de données | Détail |
|---|---|
| **Identité** | Nom, prénom, date de naissance, nationalité |
| **Contact** | Adresse postale, e-mail, numéro de téléphone |
| **Scolarité** | Filière suivie, formation envisagée, statut de boursier |
| **Familial** | Liens de parenté, catégorie socioprofessionnelle des parents (pour les mineurs) |

Autrement dit, un escroc qui met la main sur cette base dispose de tout le nécessaire pour monter des campagnes de phishing ultraciblées. Avec un nom, une filière et une adresse e-mail, on peut rédiger un mail imitant Parcoursup à la virgule près.

## Cinq mois. Sans personne pour voir.

C'est le point qui crispe. L'attaque a débuté en **octobre 2025**. Le ministère ne l'a découverte que **courant mars 2026**. Cinq mois pendant lesquels les données de centaines de milliers de jeunes Français étaient potentiellement en circulation, sans qu'aucune alerte ne se déclenche.

Le communiqué officiel parle d'un « signalement » — probablement un chercheur en sécurité ou un tiers qui a repéré les données en ligne. On ignore encore comment les données ont fini par être repérées, et surtout si elles ont déjà circulé sur les marchés noirs du dark web.

Ce délai de cinq mois illustre une réalité brutale : **les services publics français n'ont souvent aucune visibilité sur leurs propres systèmes**. Quand un attaquant utilise des identifiants légitimes, il devient invisible. Pas de comportement anomale, pas de log d'alerte, pas de détection d'exfiltration massive. L'intrusion ressemble à une session de travail normale.

## L'après-Parcoursup : mesures et colère

Dès la découverte, le ministère a enclenché la procédure classique :

- **Saisine de la CNIL** (obligatoire sous le RGPD)
- **Plainte déposée** auprès du parquet de Paris
- **Sécurisation renforcée** du module compromis : anonymisation des données pour toutes les sessions, révision des identifiants, durcissement des conditions d'accès

Le ministère appelle les usagers concernés à la « vigilance sur d'éventuelles tentatives d'hameçonnage, d'escroquerie ou d'usurpation d'identité ». Un appel à la prudence qui, pour 705 000 personnes, arrive un peu tard.

### Le contexte d'une hémoRRagie continue

Parcoursup n'est pas un cas isolé. C'est le dernier épisode d'une série qui ne s'arrête plus. Ce printemps 2026, les fuites s'enchaînent à un rythme effarant :

- **L'ANTS** (Agence Nationale des Titres Sécurisés) : [12 millions de comptes touchés](/cyber/fuite-donnees-ants-12-millions), cartes d'identité, passeports, permis de conduire exposés
- **L'Éducation nationale** : 243 000 agents victimes d'un piratage
- **L'OFII** : données d'immigration compromises par deux jeunes hackers
- **Service-public.gouv.fr** : la plateforme administrative de référence, elle-même infiltrée
- **Les Magasins U** : données clients en fuite

Cette accumulation n'est pas le fruit du hasard. Elle est alimentée par un écosystème criminel structuré, où les données d'une fuite servent de munitions pour la suivante. Plus il y a d'informations en ligne, plus les cybercriminels disposent de leviers pour orchestrer de nouvelles attaques.

## HexDex : le pirate qui a tout déclenché

Le 22 avril 2026, trois jours avant la révélation du piratage de Parcoursup, la Brigade de lutte contre la cybercriminalité de la police judiciaire de Paris interpelle un jeune homme de 22 ans en Vendée. Son pseudonyme : **HexDex**.

Ce hacker est soupçonné d'être l'un des pirates les plus actifs de la scène francophone. Il opérait principalement sur **BreachForums** et **Darkforum**, deux marchés noirs de données volées. Le parquet de Paris le relie à **une centaine de signalements** pour piratage de données personnelles.

### Ses cibles ? Tout le monde

Le curriculum vitæ numérique d'HexDex est édifiant. Il serait à l'origine du piratage de :

- Fédérations sportives françaises
- Un site répertoriant les détenteurs d'armes à feu
- Les syndicats CFDT et FO
- Des plateformes d'agents de l'Éducation nationale
- Des sites de banques alimentaires
- Logis Hôtels France, Brit Hotel
- La Philharmonie de Paris
- La préfecture de Moselle

Son modus operandi : s'infiltrer, exfiltrer, vendre les bases de données sur les forums criminels. Un business model bien rôdé. Le jeune homme gagnait de l'argent en monnayant les données volées — des centaines de milliers de profils alimentant les arnaques et l'usurpation d'identité.

### L'arrestation au moment critique

Le détail le plus saisissant : HexDex a été interpellé **alors qu'il s'apprêtait à publier de nouvelles données**. Le parquet précise qu'il avait expliqué à des journalistes avoir en main ce qu'il qualifiait de « son plus gros coup ». L'arrestation a donc interrompu une diffusion imminente.

Son compte sur Darkforum a été saisi — une bannière des forces de l'ordre est désormais visible sur son profil. Un signal fort adressé à la communauté cybercriminelle : les autorités françaises savent infiltrer ces espaces.

Mais l'histoire ne s'arrête pas là. Un autre pirate, connu sous le pseudo **Angel Batista**, collaborait avec HexDex sur certaines opérations. Son compte, brièvement fermé lors de l'arrestation de son partenaire, est réapparu en ligne — accompagné d'une publication sur des centrales nucléaires françaises. Le passage d'une fuite de données classique à un sujet nucléaire marque une escalade inquiétante.

Comme le rappelle la Vice-procureur Johanna Brouse, cheffe de la section de lutte contre la cybercriminalité : **« Zéro impunité. »**

## Pourquoi les services publics sont des cibles de choix

L'enchaînement Parcoursup → ANTS → Éducation nationale → OFII pose une question fondamentale : pourquoi les services publics français sont-ils si vulnérables ?

Plusieurs facteurs s'entremêlent :

**1. Des systèmes vieillissants.** Beaucoup de plateformes publiques reposent sur des architectures conçues il y a plus d'une décennie, avant que la menace cyber ne prenne son ampleur actuelle. Les mises à jour de sécurité sont lentes, les audits irréguliers.

**2. Le maillon humain.** Comme l'a montré l'attaque Parcoursup, un simple identifiant d'agent suffit trop souvent pour accéder à des bases massives. L'authentification multi-facteurs n'est pas systématique dans l'administration.

**3. L'absence de détection proactive.** Cinq mois sans remarquer une exfiltration de 705 000 enregistrements, c'est le symptôme d'un manque d'outils de surveillance en temps réel.

**4. La valeur des données.** Un jeune de 18 ans qui entre dans Parcoursup laisse une empreinte numérique complète : identité, adresse, parcours scolaire, situation familiale. Pour un cybercriminel, c'est de l'or pur.

Le scandale Parcoursup rappelle aussi que [la surveillance des données personnelles n'est pas qu'un sujet d'entreprise](/cyber/meta-espionne-salaries-entrainer-ia). Les administrations publiques, gardiennes des données de millions de citoyens, sont parfois les moins équipées pour les protéger.

## Les leçons à tirer — et vite

L'affaire Parcoursup n'est pas qu'un fait divers technique. C'est un signal d'alarme sur la résilience numérique de l'État français.

### Ce qui aurait pu changer la donne

- **Authentification multi-facteurs (MFA)** sur tous les accès administratifs aux bases de données citoyennes. Un mot de passe seul, c'est une porte sans serrure.
- **Surveillance comportementale** : détecter quand un agent se connecte à des heures inhabituelles, depuis une IP inconnue, ou consulte massivement des enregistrements.
- **Chiffrement des données au repos** : même exfiltrées, les données doivent être inutilisables sans la clé de déchiffrement.
- **Tests d'intrusion réguliers** : simuler les attaques pour identifier les failles avant les criminels.
- **Notification rapide des victimes** : cinq mois, c'est inacceptable. Le RGPD impose 72 heures pour notifier la CNIL — mais encore faut-il détecter l'incident.

### Le parallèle international

La France n'est pas seule face à ce défi. La Corée du Sud, Singapour et l'Australie ont tous subi des fuites massives de données publiques ces dernières années. Chaque pays a ensuite durci son cadre : obligation de notification en 4 heures au Nigeria pour les télécoms, audits obligatoires en Corée du Sud, sanctions renforcées en Australie.

L'Europe, avec le RGPD et la directive NIS2, impose un cadre strict. Mais entre la loi et son application sur le terrain — notamment dans les administrations — le fossé reste immense.

## Ce que tu dois faire si tu es concerné

Si tu as utilisé Parcoursup en 2023 ou 2025 et que tu résides en Occitanie (ou y as formulé des vœux), tu es potentiellement concerné. Voici les gestes essentiels :

- **Surveille tes e-mails et SMS** : attention aux messages qui te demandent de cliquer sur un lien ou de fournir des informations personnelles, même s'ils semblent venir de Parcoursup ou du ministère
- **Change tes mots de passe** sur les comptes liés à l'adresse e-mail utilisée pour Parcoursup
- **Active l'authentification à deux facteurs** partout où c'est possible
- **Signale toute tentative suspecte** sur la plateforme Pharos (www.internet-signalement.gouv.fr)
- **Vérifie tes comptes bancaires** régulièrement si des données financières étaient associées

## Le prix du silence numérique

Le piratage de Parcoursup est un symptôme. Derrière les 705 000 profils, c'est toute la question de la confiance dans le numérique public qui se pose. Les lycéens qui utilisent Parcoursup n'ont pas le choix — c'est la seule porte d'entrée vers l'enseignement supérieur. Ils confient leurs données à un système qui, manifestement, ne les protège pas assez.

L'arrestation de HexDex montre que les forces de l'ordre ne restent pas les bras croisés. Mais la répression, aussi nécessaire soit-elle, ne remplace pas la prévention. Tant que les administrations françaises ne disposeront pas de moyens de détection en temps réel et d'authentification solide, les portes resteront ouvertes.

Le chiffre fait mal : **705 000 personnes. Cinq mois d'invisibilité.** La prochaine fois, ce sera peut-être pire — ou peut-être que la leçon aura enfin été retenue.

## Sources

- [Fuite de données chez Parcoursup : la cyberattaque est passée inaperçue pendant cinq mois](https://www.01net.com/actualites/fuite-donnees-parcoursup-cyberattaque-passee-inapercue-pendant-six-mois.html) — 01net, avril 2026
- [Fuite de données : la France arrête le hacker responsable de l'explosion des cyberattaques](https://www.01net.com/actualites/fuite-de-donnees-la-france-arrete-le-hacker-responsable-de-lexplosion-des-cyberattaques.html) — 01net, avril 2026
- [HexDex interpellé, enquête ouverte en France](https://www.zataz.com/hexdex-interpelle-enquete-ouverte-en-france/) — ZATAZ, 22 avril 2026
- [Angel Batista et Hexdex, le piège se referme ?](https://www.zataz.com/angel-batista-et-hexdex-le-piege-se-referme/) — ZATAZ, 21 avril 2026
