---
title: "Kelp DAO : comment 292 millions $ ont failli torpiller toute la DeFi"
description: "Le 18 avril 2026, un pirate vide le bridge de Kelp DAO de 292 millions de dollars en rsETH, déclenchant la pire contagion DeFi de l'année. Récit d'un effondrement en chaîne."
date: "2026-04-29"
topic: "crypto"
tags: ["DeFi", "Kelp DAO", "rsETH", "LayerZero", "Aave", "piratage", "sécurité"]
image: "/images/articles/kelp-dao-hack-292-millions-defi-crise-2026.jpg"
author: "DailyTrend"
readingTime: 9
---

Samedi 18 avril, 17h35 UTC. En moins de dix minutes, un attaquant vide 116 500 rsETH du bridge cross-chain de Kelp DAO — l'équivalent de **292 millions de dollars**. Quatorze heures plus tard, la valeur totale verrouillée dans la DeFi a fondu de **13 milliards de dollars**. Au moins neuf protocoles déclenchent leurs plans d'urgence. Le token AAVE perd 16 %. « DeFi is dead » commence à trend sur X.

Ce n'est pas un scénario de film. C'est le plus gros piratage DeFi de 2026, et sa contagion a failli emporter l'ensemble du secteur. Voici comment une seule faille de configuration a mis le monde de la finance décentralisée à genoux.

## Le mécanisme de l'attaque : un vérifieur unique pour 292 millions $

Kelp DAO est un protocole de **liquid restaking** sur Ethereum. Le principe : tu déposes de l'ETH, Kelp le route via EigenLayer pour générer du yield supplémentaire, et tu reçois des **rsETH** en contrepartie — un token représentant ton dépôt plus les revenus accumulés.

Le rsETH est déployé sur plus de 20 réseaux (Base, Arbitrum, Linea, Blast, Mantle, Scroll…) grâce à l'infrastructure cross-chain de **LayerZero**. C'est cette infrastructure qui a été la porte d'entrée de l'attaque.

### Comment le pont a cédé

Le bridge de Kelp utilisait une configuration à **vérifieur unique** (1-of-1 DVN — Decentralized Verifier Network). En clair : une seule entité validait les transactions cross-chain. C'est comme mettre un seul vigile à la porte d'un coffre-fort contenant 292 millions de dollars.

L'attaquant a d'abord **compromis deux nœuds RPC** utilisés par le DVN de LayerZero, puis a lancé une attaque DDoS contre les serveurs restants. Résultat : le système de vérification a basculé vers les nœuds compromis. Avec le contrôle de la couche de validation, le pirate a forgé un **faux message cross-chain** qui a trompé le bridge de Kelp, lui faisant libérer 116 500 rsETH vers une adresse contrôlée par l'attaquant — soit environ 18 % de l'offre circulante totale de rsETH.

Deux tentatives supplémentaires de vol (environ 100 millions de dollars chacune) ont été bloquées à 18h26 et 18h28 UTC. Kelp a gelé ses contrats **46 minutes** après le drain initial — une éternité en temps crypto.

## La contagion : 13 milliards $ effacés en 48 heures

Le problème fondamental : les rsETH volés étaient la **réserve** qui garantissait les versions wrapped du token sur tous les réseaux Layer 2. Sans cette réserve, les détenteurs de rsETH sur Base, Arbitrum ou Blast se retrouvent avec des tokens potentiellement sans contrepartie.

La panique a été immédiate.

### Aave : 196 millions $ de dette toxique

L'attaquant a déposé les rsETH volés comme **collatéral sur Aave V3** pour emprunter environ 196 millions de dollars en ETH wrappé. Des emprunts supplémentaires sur Compound et Euler ont porté le total à **236 millions de dollars**. Le problème : ce collatéral n'a aucune valeur réelle — il provient d'un piratage.

Aave se retrouve avec **196 millions de dollars de créances douteuses**, concentrées sur la paire rsETH/WETH qui représente 39,49 % de l'ensemble des prêts du protocole. Le Guardian d'Aave a gelé les marchés rsETH à 18h52 UTC. Le fondateur Stani Kulechov a d'abord affirmé que le module de sécurité Umbrella couvrirait le déficit, avant de nuancer son propos en « explorer les pistes pour compenser le déficit » — un glissement sémantique qui a inquiété les détenteurs de stkAAVE.

| Protocole | Action d'urgence | Impact |
|---|---|---|
| Aave V3 & V4 | Gel des marchés rsETH | 196 M$ de dette toxique |
| SparkLend | Gel rsETH | Exposition limitée |
| Fluid | Gel rsETH | Exposition limitée |
| Compound | Gel rsETH | Emprunts toxiques |
| Euler | Gel rsETH | Emprunts toxiques |
| Lido | Pause deposits earnETH | stETH non affecté |
| Ethena | Pause bridges LayerZero | Pas d'exposition rsETH |
| Upshift | Gel rsETH | Exposition limitée |
| Curve | Suspension opérations Kelp DAO | Liquidité impactée |

### La fuite de liquidités

En deux jours, la TVL d'Aave a chuté de **26,3 milliards à 17,7 milliards de dollars** — une hémorragie de 8,6 milliards. Les pools USDT et USDC d'Aave V3 ont été littéralement vidés : 5,1 milliards de dollars d'actifs se sont retrouvés bloqués, impossibles à retirer sans afflux de liquidités nouvelles.

Le token AAVE a plongé de plus de 15 %, tombant à 91 dollars. Sa capitalisation boursière a fondu à 1,3 milliard. Sur Solana, l'impact a été tout aussi brutal : le marché Prime de Kamino (178 millions de dollars) a été entièrement vidé, et plusieurs pools ont atteint plus de 95 % de leur capacité.

Ce genre d'effet domino rappelle à quel point l'interconnexion des protocoles DeFi est à double tranchant. Comme on l'avait vu avec [l'institutionnalisation des stablecoins par Wall Street](/crypto/stablecoins-wall-street-morgan-stanley-institutionnalisation), la finance décentralisée est devenue un écosystème complexe où la faille d'un seul maillon peut menacer l'ensemble de la chaîne.

## LayerZero contre Kelp DAO : la guerre des responsabilités

Après l'attaque, LayerZero et Kelp DAO se sont renvoyés la balle publiquement — un spectacle pas vraiment rassurant pour les utilisateurs qui viennent de perdre des centaines de millions.

**LayerZero** a publié un communiqué blâmant Kelp pour avoir choisi une configuration à vérifieur unique. L'entreprise affirme avoir **préalablement averti** Kelp d'adopter un setup multi-vérifieurs. LayerZero a annoncé qu'elle ne signerait plus aucun message pour les projets utilisant une configuration 1-of-1.

**Kelp DAO** a riposté avec un mémo que CoinDesk a consulté avant publication. L'équipe affirme que le **guide de démarrage rapide** de LayerZero et ses configurations par défaut sur GitHub pointent vers un setup 1-of-1. Pire : selon Kelp, environ **40 % des protocoles** sur LayerZero utiliseraient la même configuration. Autrement dit, Kelp maintient qu'il a simplement suivi la norme, pas pris une décision exceptionnelle.

Cette dispute met en lumière un problème structurel de l'infrastructure cross-chain : les fournisseurs de bridges offrent des configurations flexibles, mais quand les paramètres par défaut favorisent la simplicité au détriment de la sécurité, qui porte la responsabilité quand tout explose ?

## Lazarus Group : la piste nord-coréenne se confirme

LayerZero a attribué l'attaque au **Lazarus Group**, plus précisément à son unité TraderTraitor. L'entreprise cite des indicateurs préliminaires cohérents avec ceux d'un acteur étatique hautement sophistiqué. Les trackers on-chain ont constaté que l'attaquant a financé l'adresse d'exploitation via **Tornado Cash** et converti environ 250 millions de dollars de fonds volés en ETH.

C'est le **deuxième piratage DeFi majeur attribué à Lazarus en avril 2026**. Le groupe aurait exploité le protocole Drift Protocol le 1er avril via une attaque d'ingénierie sociale contre les signataires de gouvernance. Les deux attaques combinées totalisent plus de **575 millions de dollars** drainés de la DeFi en 18 jours seulement, avec des vecteurs d'attaque totalement différents — ce qui suggère une capacité technique considérable.

LayerZero a contacté les autorités judiciaires internationales et collabore avec Seal911 et d'autres partenaires pour tracer les fonds volés. Les perspectives de récupération restent incertaines vu l'utilisation de Tornado Cash pour le blanchiment.

## « DeFi United » : un plan de sauvetage inédit

Face à l'ampleur de la crise, une coalition de projets blockchain et d'acteurs de l'écosystème — baptisée **DeFi United** — a proposé un plan coordonné pour restaurer le backing du rsETH et résorber la dette toxique d'Aave. Le plan implique d'injecter du frais ETH pour reconstituer les réserves tout en dénouant systématiquement les prêts toxiques liés à l'exploit.

C'est une réponse institutionnelle inédite dans le monde DeFi, qui montre une certaine maturité face à la crise — même si les détails exacts et les garanties restent à préciser. Ce genre de coordination spontanée entre protocoles rivaux rappelle que l'écosystème a évolué depuis les années de sauvetage chaotique de l'ère post-FTX.

## Ce que cet incident révèle sur la DeFi en 2026

Le hack de Kelp DAO n'est pas qu'un simple piratage de plus. Il expose trois failles structurelles profondes de la finance décentralisée telle qu'elle existe aujourd'hui.

### 1. Les bridges restent le maillon faible

Les ponts cross-chain ont toujours été les points de défaillance les plus fréquents dans la crypto. De Ronin (625 M$) à Wormhole (325 M$) en passant par Nomad (190 M$), l'histoire est ponctuée de drames liés aux bridges. La configuration à vérifieur unique de Kelp n'est qu'un exemple parmi d'autres — si 40 % des protocoles LayerZero utilisent le même setup, la surface d'attaque de l'ensemble de la DeFi reste béante.

### 2. L'évaluation du risque collatéral est insuffisante

Aave a accepté des tokens de liquid restaking dépendants d'un bridge comme collatéral — sans restrictions qui auraient pu limiter l'exposition. Un seul exploit de bridge s'est ainsi transformé en crise systémique d'un protocole de prêt majeur. La question n'est plus « quel token accepter ? » mais « quelles sont les dépendances infrastructurelles de chaque collatéral ? ». C'est un niveau d'analyse que la DeFi n'a pas encore atteint.

### 3. La contagion s'accélère

Un seul bridge compromis, et **13 milliards de dollars de TVL** disparaissent en 48 heures à travers neuf protocoles. La vitesse de propagation de la contagion dépasse désormais la capacité de réponse des équipes. Quand le gel des contrats prend 46 minutes — une éternité à l'échelle de marchés qui tournent 24/7 — le problème est structurel.

Cette réalité fait écho aux questions qu'on se posait déjà sur [la menace quantique pesant sur les clés crypto](/crypto/quantique-casse-cle-crypto-bitcoin-danger) : l'infrastructure crypto, aussi sophistiquée soit-elle, reste vulnérable aux failles de ses couches fondamentales. Que ce soit un algorithme de vérification défaillant ou une clé cryptographique obsolète, le résultat est le même — une faille unique peut menacer l'ensemble du système.

## L'avenir du restaking liquide après Kelp

Le restaking liquide — qui permet de réutiliser son ETH staké pour générer des rendements supplémentaires — était l'une des grandes promesses de la DeFi en 2025-2026. [La révolution Layer 2 d'Ethereum après Fusaka](/crypto/ethereum-fusaka-6-mois-apres-layer-2-revolution) avait ouvert la voie à un écosystème plus interconnecté, mais cette interconnexion a un prix.

Après le hack de Kelp, plusieurs évolutions semblent inévitables :

- **Fin des configurations single-verifier** : LayerZero a déjà annoncé qu'elle refuserait de signer pour les projets en 1-of-1. Les autres fournisseurs de bridges suivront probablement.
- **Stress tests obligatoires des collatéraux** : Les protocoles de prêt comme Aave devront auditer non seulement les tokens, mais aussi l'infrastructure sous-jacente (bridges, oracles, DVN) avant de les accepter comme collatéral.
- **Isolation des risques cross-chain** : Les protocoles vont probablement segmenter leurs marchés par chaîne, empêchant qu'un effondrement sur un L2 ne contamine l'ensemble de la plateforme.
- **Assurance DeFi renforcée** : Le module Umbrella d'Aave n'a pas suffi à couvrir les pertes. Les mécanismes d'assurance vont devoir évoluer pour couvrir des scénarios de contagion de cette ampleur.

## Ce que tu dois retenir

Le piratage de Kelp DAO n'est pas un incident isolé. C'est le symptôme d'une DeFi qui a grandi plus vite que ses garde-fous. L'interconnexion qui fait la force de la finance décentralisée — composable, ouverte, sans permission — est aussi sa plus grande vulnérabilité.

Pour les utilisateurs, la leçon est claire : diversifie tes plateformes, comprend l'infrastructure derrière chaque protocole auquel tu confies tes fonds, et ne suppose jamais qu'un token « est safe » juste parce qu'il est listé sur un protocole majeur. Le rsETH semblait solide — jusqu'à ce qu'un vérifieur unique cède.

Pour l'écosystème, c'est un électrochoc salutaire. Les 13 milliards de dollars perdus en 48 heures pourraient bien accélérer les réformes de sécurité que tout le monde savait nécessaires mais que personne n'avait la pression d'implémenter. La question est de savoir si la prochaine crise viendra trop tôt — ou si l'industrie aura eu le temps d'apprendre.

## Sources

- [Kelp DAO exploited for $292 million — CoinDesk, 18 avril 2026](https://www.coindesk.com/tech/2026/04/19/2026-s-biggest-crypto-exploit-kelp-dao-hit-for-usd292-million-with-wrapped-ether-stranded-across-20-chains)
- [Kelp DAO rsETH Exploit Drains $292 Million and Triggers Largest DeFi Crisis of 2026 — Genfinity, 20 avril 2026](https://genfinity.io/2026/04/20/kelp-dao-rseth-292-million-exploit-layerzero-bridge-defi-contagion/)
- [Actualité des crypto-monnaies de la 4e semaine d'avril 2026 — FF.io, 25 avril 2026](https://ff.io/fr/blog/news/weekly-2026-04-25)
- [Aave & Compound's $290M Kelp DAO Hack Recovery Plan — CoinUnited, 28 avril 2026](https://coinunited.io/en/pulse/2026-04-28/aave-compounds-290m-kelp-dao-hack-recovery-plan-liquidation-risks-and-defi-contagion-for-leveraged-traders)
