---
title: "Bouygues Telecom piraté encore : 4,5 millions de clients exposés"
description: "Moins de 9 mois après une première cyberattaque massive, Bouygues Telecom subit une nouvelle fuite de données via son outil fibre. Voici ce qu'il faut savoir."
date: "2026-05-12"
topic: "cyber"
tags: ["Bouygues Telecom", "fuite de données", "cyberattaque", "fibre optique", "phishing", "CNIL"]
image: "/images/articles/bouygues-telecom-nouvelle-fuite-donnees-fibre-2026.jpg"
author: "DailyTrend"
readingTime: 8
---

Neuf mois. C'est le temps qu'il a fallu à Bouygues Telecom pour se faire pirater à nouveau. Le 11 mai 2026, l'opérateur a confirmé une nouvelle fuite de données personnelles, après la compromission d'un outil interne dédié aux interventions fibre. Potentiellement 4,5 millions de clients concernés, une base de 80 Go en circulation sur les forums cybercriminels, et le même sentiment de déjà-vu pour des millions d'abonnés.

## Ce qui s'est passé : l'attaque de l'outil TECH360

Le 5 mai 2026, le collectif de hackers **OverSec** commence à faire circuler des extraits d'une base de données sur des forums spécialisés. La revendication est claire : ils ont extrait plus de 80 Go de données depuis **TECH360**, un logiciel interne utilisé par les techniciens Bouygues Telecom pour organiser les interventions fibre à domicile.

Trois jours plus tard, le 8 mai, Bouygues Telecom envoie un e-mail aux clients concernés. Le message est sans appel : « un tiers a pu frauduleusement se connecter à un outil de gestion d'intervention lié à la fibre ». L'opérateur confirme que des données personnelles ont été consultées et potentiellement exfiltrées.

Le 11 mai, l'opérateur réagit publiquement. Il précise avoir **désactivé immédiatement le compte compromis**, renforcé les accès à ses systèmes, et déposé plainte auprès des autorités compétentes. La CNIL a été notifiée, comme l'exige le RGPD.

### Le modus operandi : viser le maillon faible

Ce qui distingue cette attaque, c'est sa méthode. Les hackers ne se sont pas attaqués aux serveurs centraux de Bouygues Telecom. Ils ont ciblé un **outil secondaire**, celui que les équipes terrain utilisent au quotidien pour gérer les rendez-vous et les interventions fibre.

Un paradoxe : cet outil de gestion technique contient des données extrêmement précises et bien structurées. Nom, adresse exacte, numéro de téléphone, date de la dernière intervention — exactement le genre d'informations dont un escroc a besoin pour rendre son piège crédible.

## Quelles données ont fuité ?

Bouygues Telecom a listé les informations compromises dans sa communication aux abonnés :

| Type de donnée | Exposée ? |
|---|---|
| Nom et prénom | ✅ Oui |
| Adresse postale complète | ✅ Oui |
| Adresse e-mail | ✅ Oui |
| Numéro de téléphone | ✅ Oui |
| Date de naissance | ✅ Oui |
| Données techniques d'intervention | ✅ Oui |
| Mots de passe | ❌ Non |
| Coordonnées bancaires / IBAN | ❌ Non |
| Numéro de carte bancaire | ❌ Non |

Bonne nouvelle : pas de données bancaires ni de mots de passe cette fois. Mais ne te réjouis pas trop vite. Une fiche client complète — avec nom, adresse, téléphone et contexte d'intervention technique récente — vaut de l'or sur le marché noir du phishing.

La base couvrirait une période allant de **2022 à avril 2026**, ce qui signifie que même d'anciens abonnés Bouygues pourraient figurer dedans. Tu as quitté Bouygues en 2023 ? Tes données sont peut-être quand même dans la nature.

## 4,5 millions de personnes : l'ampleur du désastre

D'après les chercheurs en sécurité et les premières analyses du groupe FrenchBreaches, qui a relayé la revendigation d'OverSec, la base concernerait potentiellement **plus de 4,5 millions de Français**. Bouygues Telecom n'a pas confirmé ce chiffre officiellement, mais n'a pas démenti l'ordre de grandeur non plus.

Rappel : en août 2025, une première cyberattaque avait exposé les données de **6,4 millions de clients**, avec cette fois des IBAN et des données d'état civil comprises. En moins d'un an, l'opérateur cumule donc potentiellement plus de 10 millions de comptes exposés — sachant qu'une partie des abonnés a probablement été touchée deux fois.

## Le vrai danger : le phishing hyper-personnalisé

Une adresse e-mail volée seule ne vaut pas grand-chose. Mais une fiche client complète associant un nom, une adresse, un numéro de téléphone, une date de naissance et le contexte d'une intervention fibre récente ? C'est le kit idéal pour un escroc.

Le scénario type, tel que décrit par Bouygues Telecom lui-même dans son e-mail d'alerte :

1. Un faux technicien t'appelle en citant ton adresse exacte et la date de ta dernière intervention fibre
2. Il te demande de « valider » un rendez-vous de maintenance
3. Il te soutire un code de validation reçu par SMS ou des informations bancaires « pour confirmation »

Le procédé est classique, mais redoutablement efficace quand l'escroc dispose d'informations réelles. Bouygues le reconnaît d'ailleurs explicitement : un fraudeur « pourrait rentrer en contact avec vous, se rendre à votre domicile en usurpant l'identité de Bouygues Telecom ou celles d'autres sociétés, notamment en se faisant passer pour un faux technicien ».

Ce n'est pas qu'une menace théorique. Comme on l'a vu avec l'[explosion des arnaques SMS personnalisées](/cyber/smishing-france-2026-explosion-arnaque-sms-personnalisees-fuites-donnees), les cybercriminels exploitent massivement ce type de données pour créer des messages et des appels ciblés. Plus ils en savent sur toi, plus leur attaque est crédible.

## La question que tout le monde se pose : comment ont-ils fait ?

Bouygues Telecom reste évasif sur les circonstances exactes de l'intrusion. L'opérateur parle d'un « compte compromis », ce qui suggère plusieurs hypothèses :

- **Phishing d'un employé** : un technicien ou un agent du SAV a pu cliquer sur un lien piégé, donnant accès à ses identifiants TECH360
- **Identifiants faibles** : un mot de passe par défaut ou réutilifié sur un outil interne moins surveillé que les systèmes centraux
- **Accès tiers** : l'outil TECH360 pourrait être géré par un prestataire externe, dont la sécurité serait moins robuste

Le fait que l'outil ciblé soit un logiciel de gestion terrain — pas un système central — pose une question plus large : **les entreprises protègent-elles vraiment tous leurs points d'entrée ?** Un outil interne peut sembler anodin, mais dès qu'il contient des données personnelles, il devient une cible de choix.

C'est d'ailleurs un enseignement que l'[ANSSI souligne dans son panorama 2025](https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/) : les cybercriminels ciblent de plus en plus les systèmes périphériques et les outils métiers, souvent moins bien sécurisés que les infrastructures centrales.

## Le contexte : les opérateurs télécoms dans le viseur

Bouygues Telecom n'est pas un cas isolé. Ces deux dernières années, les quatre principaux opérateurs historiques français ont tous été victimes d'au moins une fuite de données. Les télécoms sont des cibles de choix pour une raison simple : ils détiennent des volumes colossaux de données personnelles, et leur infrastructure est immense, avec de nombreux outils et points d'accès.

L'Arcep a d'ailleurs récemment mis en place un dispositif spécial pour lutter contre les appels frauduleux et les tentatives d'escroquerie, un fléau qui touche des millions de Français. La [CNIL a aussi durci la donne en rendant la double authentification obligatoire](/cyber/cnil-double-authentification-obligatoire-2fa-2026-fuites-donnees) pour les services en ligne — une mesure qui aurait pu limiter l'impact de cette fuite si elle avait été appliquée plus tôt aux outils internes.

En mars 2026, l'ANSSI qualifiait le niveau de cybermenaces de « plateau » plutôt que d'explosion. Mais un plateau à un niveau élevé, c'est toujours beaucoup trop pour les 40 millions de comptes français piratés en 2025 selon les chiffres de Surfshark.

## Ce que tu dois faire si tu es chez Bouygues

Pas de panique, mais de la vigilance. Voici les gestes essentiels :

- **Ne communique jamais de code de sécurité** par téléphone ou SMS, même si l'interlocuteur semble tout savoir de toi
- **Méfie-toi des appels « Bouygues »** : si on te contacte pour une intervention fibre, raccroche et rappelle via le numéro officiel (1064)
- **Ne clique sur aucun lien** dans un e-mail ou SMS suspect te demandant de « vérifier » tes informations
- **Vérifie ton espace client** directement sur le site officiel pour voir si tu as été notifié
- **Change ton mot de passe** Bouygues, même s'il n'a pas fuité — c'est une bonne habitude

Et si tu as quitté Bouygues récemment, tu n'es pas à l'abri pour autant. La base couvre 2022-2026, donc tes données pourraient toujours être en circulation.

## Les leçons à tirer de cette nouvelle fuite

### 1. Le problème systémique des outils internes

Les entreprises investissent massivement dans la sécurité de leurs systèmes centraux. Mais les outils métiers — logiciels de gestion, plateformes de SAV, outils terrain — sont souvent le parent pauvre de la cybersécurité. Bouygues n'est pas le seul concerné.

### 2. Le modèle de la « double frappe »

Un premier piratage affaiblit la confiance. Le second la détruit. Quand une entreprise se fait pirater deux fois en moins d'un an, ce n'est pas juste de la malchance — c'est un problème structurel de gouvernance de la sécurité.

### 3. La donnée personnelle ne meurt jamais

La base couvre quatre ans d'historique. Des clients partis depuis longtemps y figurent encore. C'est un rappel brutal : tes données personnelles survivent à la fin de ton abonnement. Le droit à l'oubli du RGPD existe sur le papier, mais dans la pratique, les entreprises conservent des archives bien plus longtemps que nécessaire.

### 4. L'arme du phishing personnalisé

Comme on l'a vu avec les [arnaques par clonage vocal à l'IA](/cyber/deepfake-vocal-arnaque-clonage-voix-ia-2026), les cybercriminels n'ont plus besoin d'inventer des scénarios. Ils ont tes vraies données. Ils connaissent ton adresse, tes interventions, ton historique. L'attaque devient invisible parce qu'elle est trop réaliste.

## Ce que Bouygues doit faire maintenant

L'opérateur affirme que « la situation a été résolue dans les plus brefs délais par les équipes techniques ». Mais résoudre un incident, c'est une chose. Restaurer la confiance, c'en est une autre.

Bouygues Telecom doit :

- **Publier le nombre exact** de clients touchés — la transparence n'est pas optionnelle
- **Expliquer clairement** comment l'intrusion a eu lieu et quelles mesures correctives ont été prises
- **Proposer un suivi concret** aux abonnés impactés (surveillance du crédit, alertes en cas d'usurpation)
- **Auditer l'ensemble** de ses outils internes, pas seulement TECH360
- **Repenser la rétention** de données : pourquoi conserver quatre ans d'historique d'interventions dans un outil accessible en ligne ?

L'opérateur a aussi rappelé que les [ransomwares et les attaques par IA explosent](/cyber/ransomware-explosion-389-pourcent-ia-cybercriminalite-2026) — un contexte qui rend chaque fuite de données d'autant plus dangereuse, car les données volées aujourd'hui nourrissent les attaques de demain.

## Sources

- [Bouygues Telecom victime d'une nouvelle fuite de données](https://www.journaldugeek.com/2026/05/11/bouygues-telecom-victime-dune-nouvelle-fuite-de-donnees-comment-savoir-si-vous-etes-touches/) — Journal du Geek, 11 mai 2026
- [Vol de données chez Bouygues Télécom : ce que l'on sait](https://selectra.info/telecom/actualites/marche/vol-de-donnees-bouygues-telecom-11-mai-2026) — Selectra, 11 mai 2026
- [Nouvelle fuite chez Bouygues Telecom : vos données ont encore été volées](https://www.01net.com/actualites/nouvelle-fuite-bouygues-telecom-donnees-personnelles-encore-ete-volees.html) — 01net, 11 mai 2026
- [Bouygues Telecom victime d'une fuite de données visant son SAV fibre](https://www.clubic.com/actualite-612526-bouygues-telecom-victime-d-une-fuite-de-donnees-visant-son-sav-fibre-l-operateur-apporte-quelques-precisions.html) — Clubic, 11 mai 2026
- [Panorama de la cybermenace 2025](https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/) — ANSSI, mars 2026
- [FrenchBreaches : analyse de la base OverSec](https://frenchbreaches.com/blog/plus-de-45-millions-de-francais-potentiellement-exposes-dans-une-base-de-donnees-liee-au-sav-fibre-bbox) — FrenchBreaches, 5 mai 2026
