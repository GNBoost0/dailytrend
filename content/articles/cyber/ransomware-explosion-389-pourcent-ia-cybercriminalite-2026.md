---
title: "Ransomware : l'IA fait exploser les victimes de 389% en un an"
description: "Le rapport FortiGuard Labs révèle une hausse de 389% des victimes de ransomware en 2025, propulsée par des outils d'IA criminels. Décryptage d'un séisme cyber."
date: "2026-05-09"
topic: "cyber"
tags: ["ransomware", "intelligence artificielle", "cybercriminalité", "sécurité informatique"]
image: "/images/articles/ransomware-explosion-389-pourcent-ia-cybercriminalite-2026.jpg"
author: "DailyTrend"
readingTime: 9
---

Tu penses que ton entreprise est trop petite pour intéresser les pirates ? Détrompe-toi. Le rapport mondial publié le 4 mai 2026 par FortiGuard Labs, le laboratoire de veille cyber de Fortinet, pose un chiffre qui glace le sang : **7 831 victimes confirmées de ransomware** dans le monde sur la seule année 2025. Contre 1 600 l'année précédente. Soit une hausse de **389% en douze mois**.

Et ce n'est pas un pic passager. C'est l'accélération brutale d'une industrialisation de la cybercriminalité, alimentée par un moteur que personne ne contrôle vraiment : l'intelligence artificielle.

## WormGPT, FraudGPT, HexStrike AI : l'arsenal IA du crime

Les hackers ne codent plus à la main. Ils sous-traitent à l'IA.

Le rapport Fortinet identifie une poignée d'outils criminels disponibles sur le darkweb qui ont changé la donne en 2025. **WormGPT** et **FraudGPT** — des modèles linguistiques conçus spécifiquement pour le phishing, l'ingénierie sociale et la rédaction de messages frauduleux — sont désormais accessibles en mode SaaS (Software as a Service). On parle littéralement de *cybercrime-as-a-service*.

Le nouveau venu, **HexStrike AI**, va encore plus loin. Il automatise la reconnaissance des cibles et génère des trajectoires d'attaque complexes en quelques minutes. **BruteForceAI**, lui, utilise des modèles linguistiques pour analyser intelligemment les formulaires de connexion et orchestrer des attaques multithread d'une efficacité redoutable.

Résultat concret : les données IPS (Intrusion Prevention System) de FortiGate montrent une **baisse de 22% des tentatives de force brute**. Paradoxe apparent ? Pas du tout. Les attaquants font moins de tentatives… mais réussissent mieux. L'IA leur permet de cibler plus précisément, de tester les bons identifiants au bon moment, et de gaspiller moins d'efforts dans des attaques vouées à l'échec.

## Le temps d'exploitation s'effondre : 48 heures chrono

C'est peut-être la statistique la plus inquiétante du rapport. En 2024, le délai moyen entre la divulgation d'une vulnérabilité et son exploitation massive par les pirates — le fameux *Time-to-Exploit* (TTE) — était de **4,76 jours**. En 2025, ce délai s'est contracté à **24 à 48 heures** pour les vulnérabilités critiques.

L'exemple le plus frappant : les tentatives d'exploitation de la vulnérabilité React2Shell ont commencé **quelques heures seulement** après sa divulgation publique. Les phases de reconnaissance, d'armement et d'exécution s'automatisent désormais grâce à l'IA, ne laissant aux équipes de sécurité qu'un minuscule créneau pour réagir.

Ce genre d'accélération n'est pas sans rappeler la récente [faille zero-day CVE-2026-0300 de Palo Alto Networks](/cyber/plan-cyber-200-millions-autorite-numerique-france-2026), identifiée le 6 mai 2026, qui affecte le portail d'authentification de PAN-OS avec un score CVSS de 9,3/10 — et pour laquelle aucun correctif n'existait pendant plusieurs jours. Quand le TTE est plus court que le cycle de patching, le problème est structurel.

## Qui sont les cibles ? Le classement sans surprise

Le ransomware ne frappe pas au hasard. Il vise les secteurs les plus rentables.

| Secteur | Incidents confirmés (2025) |
|---|---|
| Industrie manufacturière | 1 284 |
| Services aux entreprises | 824 |
| Commerce de détail | 682 |

L'industrie manufacturière arrive largement en tête. Pourquoi ? Parce qu'une chaîne de production arrêtée coûte des millions par heure, et que ces entreprises paient souvent la rançon pour reprendre leur activité le plus vite possible. C'est rationnel, du point de vue criminel.

Côté géographie, les **États-Unis concentrent 3 381 incidents**, suivis du Canada (374) et de l'Allemagne (291). La France n'apparaît pas dans le top 3 mondial, mais les attaques sur le territoire français se multiplient : la commune de **Quiberon** a ainsi été frappée par le rançongiciel **Qilin** début mai 2026, et l'hôtel de luxe **Cheval Blanc Randheli** (groupe LVMH) a confirmé un piratage exposant passeports et profils clients.

## Infostealers : le marché noir de tes données personnelles

Le rapport révèle aussi une mutation dans la façon dont les cybercriminels récoltent les données. Fini le temps où ils se contentaient de voler des identifiants isolés. Aujourd'hui, ils ciblent des **ensembles de données complets** — journaux de navigateur, cookies, historique, sessions actives — grâce aux *infostealers*.

Sur le darkweb, les journaux issus d'infostealers représentent **67,12% des données mises en vente**, écrasant les combolists (16,47%) et les identifiants isolés (5,96%). Le marché est dominé par trois outils malveillants :

| Infostealer | Infections recensées | Part de marché |
|---|---|---|
| RedLine | 911 968 | 50,80% |
| Lumma | 499 784 | 27,84% |
| Vidar | 236 778 | 13,19% |

Et la tendance ne faiblit pas : les chercheurs constatent une **progression supplémentaire de 79%** de ces jeux de données détournés début 2026. Tes données de navigation, tes sessions connectées, tes formulaires auto-remplis — tout ça se monnaye en temps réel sur le darkweb.

C'est précisément ce genre de fuite de données personnelles qui a poussé la CNIL à durcir sa position, comme on l'a vu quand [la double authentification est devenue obligatoire](/cyber/cnil-double-authentification-obligatoire-2fa-2026-fuites-donnees) pour renforcer la protection des comptes face au piratage massif d'identifiants.

## L'IA agentique : le concept qui change tout

Le rapport de Fortinet introduit un terme qui va devenir central dans le paysage cyber : **l'IA agentique**. Concrètement, il ne s'agit plus seulement de modèles qui génèrent du texte ou du code. Ce sont des systèmes capables de planifier, de coordonner et d'exécuter des actions de manière autonome.

Derek Manky, Chief Security Strategist chez FortiGuard Labs, le résume ainsi : *« Les acteurs malveillants commencent à exploiter l'IA agentique pour orchestrer des attaques d'une sophistication sans précédent. »*

Imagine un programme qui scanne automatiquement les vulnérabilités d'une entreprise, qui sélectionne la méthode d'attaque la plus efficace, qui adapte sa stratégie en temps réel face aux défenses déployées, et qui chiffre les données avant que quiconque ait pu réagir. Ce n'est plus de la science-fiction — c'est ce qui se passe maintenant.

Cette sophistication accrue rend les attaques de phishing et de smishing particulièrement redoutables. Comme l'a documenté notre article sur [l'explosion du smishing en France](/cyber/smishing-france-2026-explosion-arnaque-sms-personnalisees-fuites-donnees), les arnaques par SMS sont devenues ultra-personnalisées grâce aux données issues des infostealers, rendant les messages frauduleux quasi indiscernables des communications légitimes.

## Criminalité-as-a-service : n'importe qui peut devenir pirate

L'autre révolution, c'est la démocratisation du crime. Les kits ransomware clés en main se vendent sur le darkweb comme des abonnements Netflix. Tu paies un abonnement mensuel, tu reçois un outil complet avec interface d'administration, tableau de bord de suivi des victimes, support technique… et sometimes même des mises à jour régulières.

Ce modèle élimine le besoin d'expertise technique. Un individu sans aucune compétence en programmation peut lancer une campagne ransomware ciblée en quelques clics. L'IA fait le reste : écriture du message de phishing, sélection des cibles, adaptation de la charge malveillante au système de la victime.

C'est cette *démocratisation* qui explique l'explosion vertigineuse du nombre de victimes. Le nombre d'attaquants potentiels n'a jamais été aussi élevé, et le coût d'entrée n'a jamais été aussi bas.

## Cloud et santé : les nouveaux terrains de chasse

Le rapport note aussi une **explosion des incidents liés au cloud**, mais avec un twist intéressant : ce ne sont pas les infrastructures cloud elles-mêmes qui sont attaquées, mais les **identifiants des utilisateurs**. Les attaquants préfèrent se faire passer pour des employés légitimes plutôt que de pirater les serveurs.

Les établissements de santé sont particulièrement visés. Cliniques, hôpitaux, laboratoires — tous accumulent des données sensibles et disposent souvent de budgets de sécurité limités. Leur surface d'attaque est immense : de nombreux comptes utilisateurs, des intégrations complexes avec des systèmes tiers, et un impératif de disponibilité qui les rend très enclins à payer la rançon.

Cette vulnérabilité du secteur santé rappelle l'urgence du cadre réglementaire européen. Le [plan cyber de 200 millions d'euros](/cyber/plan-cyber-200-millions-autorite-numerique-france-2026) annoncé fin avril 2026 prévoit notamment des audits flash dans chaque ministère et le renforcement des outils de détection — mais les hôpitaux et cliniques privées restent largement livrés à eux-mêmes.

## Que faire face à cette menace ? Les recommandations concrètes

Face à cette industrialisation du crime, les défenses doivent elles aussi changer de dimension.

**Pour les entreprises :**

- **Segmentation stricte du réseau** — Si un poste est compromis, le ransomware ne doit pas pouvoir se propager à l'ensemble du système. La segmentation IT/OT (informatique de gestion / informatique industrielle) est critique, surtout pour le manufacturier.
- **Authentification multifacteur partout** — Pas seulement sur les comptes admin. Sur tous les comptes, y compris les boîtes mail. Les infostealers volent les mots de passe ; le MFA ajoute une couche que le vol d'identifiant seul ne contourne pas.
- **Sauvegardes immuables hors ligne** — Si tes sauvegardes sont accessibles depuis le réseau compromis, le ransomware les chiffre aussi. Des sauvegardes déconnectées et impossibles à modifier sont ta meilleure assurance.
- **Tests de restauration réguliers** — Une sauvegarde que tu n'as jamais testée, c'est une sauvegarde qui ne fonctionnera probablement pas quand tu en auras besoin.
- **Surveillance proactive du darkweb** — Surveiller si tes identifiants ou tes données circulent permet d'anticiper une attaque avant qu'elle ne frappe.

**Pour les particuliers :**

- Active le MFA sur tous tes comptes importants (mail, banque, réseaux sociaux).
- Ne recycle pas tes mots de passe — un identifiant compromis sur un service peu sécurisé peut ouvrir la porte à ton compte bancaire.
- Méfie-toi des pièces jointes et liens, même provenant de contacts connus — l'IA rend les messages frauduleux très convaincants.

## Coopération internationale : l'autre bataille

Fortinet participe au **Cybercrime Atlas** du Forum économique mondial, une plateforme de collaboration public-privé qui cartographie les réseaux cybercriminels via la veille open-source. L'opération **Red Card 2.0**, orchestrée par INTERPOL, a déjà permis le démantèlement d'un réseau majeur d'escroqueries en ligne en Afrique.

Le programme **Cybercrime Bounty**, lancé conjointement avec Crime Stoppers International, offre un canal sécurisé pour signaler anonymement les cybermenaces. Ces initiatives montrent que la réponse ne peut être que collective — un seul acteur, aussi puissant soit-il, ne peut pas endiguer un phénomène mondialisé.

## Ce que ça signifie pour 2026

Derek Manky le dit clairement : *« Au fur et à mesure que les cybercriminels adossent leurs tactiques à l'IA, les entreprises doivent faire évoluer leurs opérations de cybersécurité en adoptant une défense industrialisée et des outils optimisés par l'IA. »*

La course technologique est lancée. D'un côté, des criminels qui automatisent toujours plus vite grâce à l'IA agentique. De l'autre, des défenseurs qui doivent intégrer l'IA dans leurs propres outils de détection et de réponse. Le problème, c'est que les attaquants n'ont pas de comité de conformité, de budget validé en réunion, ou de processus de validation à respecter. Ils peuvent déployer une nouvelle technique en quelques heures. Les entreprises, elles, mettent des mois à déployer un nouveau outil de sécurité.

Ce décalage de vitesse est le défi central de la cybersécurité en 2026. Et si le chiffre de 389% ne te réveille pas, rien ne le fera.

## Sources

- [Cybercriminalité : le nombre de victimes de ransomware explose](https://enderi.fr/cybercriminalite-nombre-victimes-explose/) — Enderi.fr, 4 mai 2026
- [Palo Alto Networks alerte sur une nouvelle zero-day déjà exploitée (CVE-2026-0300)](https://www.it-connect.fr/palo-alto-networks-alerte-sur-une-nouvelle-zero-day-deja-exploitee-cve-2026-0300/) — IT-Connect, 6 mai 2026
- [Cyberattaques : les 10 incidents majeurs du 5 mai 2026](https://dcod.ch/2026/05/05/cyberattaques-les-10-incidents-majeurs-du-5-mai-2026/) — DCOD, 5 mai 2026
- [Actualité cybersécurité 2026 : NIS2, CRA, ANSSI](https://www.donneespersonnelles.fr/actualite-cybersecurite-2026) — DonneesPersonnelles.fr, mai 2026
- [Cyber actualités ZATAZ du 8 mai 2026](https://www.zataz.com/cyber-actualites-zataz-du-8-mai-2026/) — ZATAZ, 8 mai 2026
