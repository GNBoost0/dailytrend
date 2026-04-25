---
title: "Quantique : une clé crypto cassée, le Bitcoin en danger réel ?"
description: "Un chercheur a cassé une clé elliptique sur un ordinateur quantique public. 6,9 millions de Bitcoin sont exposés. Décryptage d'une menace qui cesse d'être théorique."
date: "2026-04-26"
topic: "crypto"
tags: ["quantique", "bitcoin", "sécurité", "blockchain", "cryptographie"]
image: "/images/articles/quantique-casse-cle-crypto-bitcoin-danger.jpg"
author: "DailyTrend"
readingTime: 9
---

La nouvelle a fait l'effet d'une déflagration dans l'écosystème crypto. Un chercheur indépendant, Giancarlo Lelli, vient de réussir ce que beaucoup considéraient encore comme un exercice théorique : casser une clé cryptographique elliptique en utilisant un ordinateur quantique accessible au public. Récompensé par 1 Bitcoin (environ 78 000 $ au prix actuel), cet exploit pose une question urgente. Les blockchains sont-elles réellement prêtes pour l'ère quantique ?

## Un exploit 512 fois plus puissant que le précédent record

Le 24 avril 2026, la startup Project Eleven a remis son **Q-Day Prize** à Giancarlo Lelli. Sa performance ? Avoir cassé une clé elliptique de 15 bits sur du matériel quantique cloud-accessible. Le précédent record, établi en septembre 2025 par Steve Tippeconnic sur un IBM 133-qubits, portait sur une clé de 6 bits. En sept mois, la barrière a été repoussée d'un facteur **512**.

Pour comprendre l'importance de ce bond, il faut saisir ce que signifie chaque bit supplémentaire. Une clé de 6 bits offre un espace de recherche de 64 combinaisons. Une clé de 15 bits ? **32 767 possibilités**. La progression n'est pas linéaire — elle est exponentielle. Et elle a été réalisée par un chercheur indépendant, pas par un laboratoire national ou un géant technologique.

Lelli a exploité une variante de **l'algorithme de Shor**, proposé dès 1994 par le mathématicien Peter Shor. Cet algorithme quantique cible le problème du logarithme discret sur courbe elliptique (ECDLP), précisément le mécanisme mathématique qui sécurise les signatures numériques de Bitcoin et Ethereum.

Alex Pruden, CEO de Project Eleven, l'a dit clairement : les exigences en ressources pour ce type d'attaque ne cessent de baisser, et les barrières pratiques s'effondrent avec elles.

## Bitcoin utilise 256 bits — pourquoi s'inquiéter ?

La réponse évidente, c'est qu'une clé de 15 bits n'a rien à voir avec les clés de 256 bits utilisées par Bitcoin. L'espace de recherche passe de 32 767 à un nombre astronomique. Le réseau n'est pas menacé demain matin.

Sauf que les estimations théoriques s'effondrent aussi. Une étude de **Google Research**, publiée en avril 2026, estime désormais qu'une attaque complète sur une clé de 256 bits nécessiterait **moins de 500 000 qubits physiques**. Les précédentes projections tablaient sur des millions. Le fossé entre la théorie et la pratique se réduit à grande vitesse.

| Indicateur | Valeur |
|---|---|
| Clé cassée par Lelli | 15 bits (32 767 combinaisons) |
| Clé Bitcoin standard | 256 bits |
| Record précédent (sept. 2025) | 6 bits |
| Facteur d'amélioration | ×512 |
| Estimation Google pour 256 bits | < 500 000 qubits |
| Récompense Q-Day Prize | 1 BTC (~78 000 $) |

Et surtout, le matériel utilisé par Lelli est **accessible au public via le cloud**. N'importe qui, avec les compétences et le budget, peut louer du temps de calcul quantique. La démocratisation de ces machines change la nature même de la menace.

## 6,9 millions de Bitcoin directement exposés

Project Eleven a publié un chiffre qui glace le sang des détenteurs de Bitcoin : environ **6,9 millions de Bitcoin**, soit un tiers de l'offre totale, sont stockés dans des adresses dont les clés publiques sont visibles sur la blockchain. Ce sont ces adresses qui seraient les premières vulnérables à une attaque quantique.

Parmi elles, les Bitcoin estimés de **Satoshi Nakamoto** — environ 1 million de BTC, inchangés depuis les premiers jours du réseau. Si un ordinateur quantique suffisamment puissant voyait le jour, ces fonds seraient théoriquement accessibles à quiconque pourrait en dériver les clés privées.

Le mécanisme est simple à comprendre. La cryptographie sur courbe elliptique (ECC) permet à un portefeuille de prouver qu'il contrôle des fonds sans révéler sa clé privée. La clé publique est visible par tous, mais dériver la clé privée à partir de la clé publique est censé être impossible en pratique. L'algorithme de Shor remet en cause cette certitude.

## Vitalik Buterin avait tiré la sonnette d'alarme

Le créateur d'Ethereum, Vitalik Buterin, avait déjà estimé que la crypto avait **jusqu'en 2028** pour éviter ce qu'il appelait un « effondrement quantique ». Un délai qui semblait confortable il y a encore quelques mois, mais que l'exploit de Lelli rend nettement plus préoccupant.

La menace n'est plus confinée aux articles académiques. Elle a un visage, un nom, et un prix : 1 Bitcoin. Le message est clair — la fenêtre d'action se referme.

## Les solutions existent, mais la montre tourne

Les développeurs ne sont pas restés les bras croisés. Plusieurs propositions de migration vers des algorithmes **post-quantiques** sont sur la table :

- **BIP-360** : Une proposition d'amélioration de Bitcoin qui ajouterait des types d'adresses résistantes au quantique, basées sur des signatures par réseaux euclidiens (lattice-based cryptography).
- **Ethereum** : Des plans de migration vers des algorithmes post-quantiques sont en cours d'élaboration.
- **Tron, StarkWare, Ripple** : Chacun a publié ses propres feuilles de route de transition.

Le problème, c'est le calendrier. Migrer une blockchain vers de nouveaux algorithmes cryptographiques demande un consensus du réseau, des mois — voire des années — de développement, et une coordination exceptionnelle entre les acteurs. Le [Bitcoin à 77 000 $](/crypto/bitcoin-77k-analyse-avril-2026) retient son souffle pour des raisons techniques, mais la menace quantique pourrait bien être le véritable test de résilience du réseau.

## L'enjeu dépasse la crypto

La cryptographie sur courbe elliptique ne protège pas que Bitcoin. Elle sécurise aussi les communications internet (TLS), les signatures numériques gouvernementales, et l'infrastructure bancaire mondiale. Une faille dans l'ECC aurait des conséquences systémiques bien au-delà de l'écosystème crypto.

C'est d'ailleurs pourquoi les agences de sécurité comme la NIST (National Institute of Standards and Technology) ont déjà standardisé des algorithmes post-quantiques. La transition globale est engagée — mais les blockchains, par leur nature décentralisée, sont parmi les systèmes les plus difficiles à migrer.

## Le paradoxe du chercheur indépendant

L'aspect le plus frappant de cette histoire, c'est peut-être le profil de Lelli. Pas de laboratoire national, pas de budget militaire. Un chercheur indépendant, du matériel cloud, et suffisamment de talent pour repousser les limites de ce qui était considéré comme possible.

Si un individu seul peut accomplir cela aujourd'hui, que pourront faire des États-nations dans cinq ans ? La Chine, qui [serre la vis sur la crypto](https://www.cointribune.com/la-chine-serre-la-vis-sur-la-crypto-et-reduit-ses-liens-financiers-avec-les-etats-unis/) et investit massivement dans l'IA et le quantique via des acteurs comme DeepSeek, ne manque pas de ressources. Ni les États-Unis, qui viennent de sanctionner des entreprises chinoises tout en voyant leur propre président participer à un gala memecoin controversé.

## L'urgence d'un réveil collectif

L'exploit de Lelli n'est pas une alerte rouge immédiate. Personne ne va voler vos Bitcoin ce week-end. Mais c'est un **signal d'alarme gradué** qui ne laisse plus de place au déni.

Les faits sont têtus : les barrières techniques s'effondrent, les estimations de ressources baissent, et les adversaires potentiels se multiplient. Les blockchains doivent accélérer leurs transitions post-quantiques, et les utilisateurs doivent commencer à comprendre que la sécurité de demain passera par de nouveaux outils — pas par ceux d'aujourd'hui.

Pendant que le marché reste focalisé sur les mouvements de prix et que [AWS intègre Chainlink](/crypto/aws-chainlink-crypto-infra-entreprise) pour rapprocher crypto et entreprise, un threat model bien plus fondamental se dessine en arrière-plan. La question n'est plus de savoir *si* l'ordinateur quantique menacera Bitcoin. Mais *quand* — et si le réseau sera prêt.

## Sources

- [Researcher wins 1 bitcoin bounty for largest quantum attack on elliptic curve yet](https://www.coindesk.com/tech/2026/04/24/researcher-wins-1-bitcoin-bounty-for-largest-quantum-attack-on-underlying-tech) — CoinDesk, 24 avril 2026
- [Un chercheur parvient à casser une clé crypto avec un ordinateur quantique accessible au public](https://www.cointribune.com/un-chercheur-parvient-a-casser-une-cle-crypto-avec-un-ordinateur-quantique-accessible-au-public/) — CoinTribune, avril 2026
- [La Chine serre la vis sur la crypto et réduit ses liens financiers avec les États-Unis](https://www.cointribune.com/la-chine-serre-la-vis-sur-la-crypto-et-reduit-ses-liens-financiers-avec-les-etats-unis/) — CoinTribune, avril 2026
- [Les baleines accumulent massivement alors que le Bitcoin fonce vers les 80 000 $](https://www.cointribune.com/les-baleines-accumulent-massivement-alors-que-le-bitcoin-fonce-vers-les-80-000/) — CoinTribune, avril 2026
