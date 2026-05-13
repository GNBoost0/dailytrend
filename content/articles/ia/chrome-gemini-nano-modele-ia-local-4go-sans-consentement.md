---
title: "Chrome installe Gemini Nano : 4 Go d'IA sur ton PC sans te demander"
description: "Google Chrome télécharge silencieusement un modèle IA de 4 Go sur des millions de PC. Découvre pourquoi, comment vérifier, et ce que ça implique pour ta vie privée."
date: "2026-05-12"
topic: "ia"
tags: ["Chrome", "Gemini Nano", "Google", "IA locale", "vie privée", "RGPD"]
image: "/images/articles/chrome-gemini-nano-modele-ia-local-4go-sans-consentement.jpg"
author: "DailyTrend"
readingTime: 8
---

Tu utilises Google Chrome ? Regarde ton disque dur. Il y a peut-être 4 Go d'intelligence artificielle que tu n'as jamais demandés, nichés dans un dossier au nom abscons : **OptGuideOnDeviceModel**. Pas de notification, pas de pop-up, pas de case à cocher. Juste un fichier `weights.bin` qui s'est invité tranquillement sur ta machine.

L'information a explosé début mai 2026 quand Alexander Hanff — chercheur en cybersécurité et juriste suédois, connu sous le pseudo *That Privacy Guy* — a publié une enquête minutieuse [sur son blog](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/). Le verdict : depuis Chrome 147, Google déploie **Gemini Nano**, son modèle d'IA léger, directement sur les ordinateurs de ses utilisateurs. Sans leur consentement explicite.

## Chrome 147 : le cheval de Troie de l'IA locale

Le mécanisme est simple et silencieux. Lorsque Chrome détecte que ta machine possède les ressources nécessaires — 16 Go de RAM, 22 Go d'espace disque libre, un processeur quatre cœurs et un GPU avec 4 Go de VRAM — il lance en arrière-plan le téléchargement d'un fichier d'environ 4 Go. Le tout prend une quinzaine de minutes et se fait sans aucune indication visible pour l'utilisateur.

Le fichier atterrit dans un dossier nommé **OptGuideOnDeviceModel**, un nom volontairement opaque. À l'intérieur : `weights.bin`, les « poids » du modèle Gemini Nano. Pour rappel, les poids d'un modèle d'IA, c'est l'équivalent de son cerveau — les milliards de paramètres numériques qui lui permettent de fonctionner.

| Détail | Information |
|---|---|
| **Fichier** | `weights.bin` |
| **Taille** | ~4 Go |
| **Dossier** | `OptGuideOnDeviceModel` |
| **Version Chrome** | 147 et ultérieures |
| **Modèle** | Gemini Nano (allégé) |
| **Consentement** | Aucun |

Et ce n'est pas un bug. C'est un choix délibéré de Google.

## À quoi sert Gemini Nano dans Chrome ?

Gemini Nano n'est pas le Gemini qui te répond quand tu cliques sur la pilule « Mode IA » dans la barre d'adresse de Chrome. Cette pilule envoie tes requêtes vers les serveurs de Google — rien à voir avec le modèle local.

Le Gemini Nano intégré à Chrome sert à des fonctionnalités périphériques :

- **Aide à la rédaction** dans les champs de texte
- **Suggestions automatiques** contextuelles
- **Détection d'arnaques** et de sites dangereux
- **Résumé de contenus** dans certaines configurations expérimentales

Autant dire : des fonctions que la plupart des utilisateurs n'activent même pas consciemment. Des fonctionnalités expérimentales, cachées dans des menus `chrome://flags` que personne ne visite jamais. Et pour ça, Google te_pose 4 Go sur le disque sans te prévenir.

## Pourquoi Google fait ça (et pourquoi ça pose problème)

La réponse est économique. Alexander Hanff l'explique crûment à CNET : **« Exécuter l'inférence sur le matériel des utilisateurs permet à Google de pousser des fonctionnalités IA sans en supporter les coûts de calcul. »**

Traduction : au lieu de faire tourner ses modèles sur ses propres serveurs — ce qui coûte des milliards en infrastructure et en énergie — Google externalise le calcul sur ta machine. Ton processeur, ta RAM, ton électricité. Gratuitement. Sans te demander.

C'est un transfert de coût pur et simple. Et ça soulève trois problèmes majeurs.

### 1. Le problème du stockage et de la bande passante

4 Go, ça peut sembler négligeable sur un disque de 512 Go. Mais pas pour tout le monde. Les utilisateurs de PC d'entrée de gamme, les Chromebooks avec stockage eMMC limité, les personnes avec des forfaits internet à données limitées — tous sont impactés. Alexander Hanff estime que si le déploiement touche l'ensemble du parc Chrome mondial, cela représenterait entre **6 000 et 60 000 tonnes d'équivalent CO₂** supplémentaires. Rien que pour le téléchargement.

Pire : si tu supprimes le fichier manuellement, Chrome le **retélécharge** au prochain lancement. Et chaque mise à jour du modèle repart de zéro.

### 2. Le problème légal en Europe

Hanff ne mâche pas ses mots : cette pratique pourrait constituer une **violation du RGPD** (Règlement Général sur la Protection des Données), spécifiquement ses principes de licéité, d'équité et de transparence.

En Europe, le consentement explicite est requis pour installer des logiciels ou collecter des données sur l'appareil d'un utilisateur. Or ici : pas de notification, pas d'opt-in, pas d'information claire. Juste un dossier caché.

Google aurait également dû déclarer cette installation dans le cadre de la **Corporate Sustainability Reporting Directive** (CSRD), étant donné l'impact environnemental potentiel du déploiement à l'échelle mondiale.

Pour l'heure, le déploiement semble **bloqué en Europe** — probablement parce que les équipes juridiques de Google anticipent les risques RGPD. Mais rien ne garantit que ça dure.

### 3. Le problème de la confiance

C'est peut-être le plus grave. Google a deux décennies d'histoires de violations de la vie privée derrière lui. Le tracking sauvage sur Safari en 2012, les amendes record de la CNIL, les révélations du *Location History* qui continuait même quand l'utilisateur la désactivait. Hanff le dit sans détour :

> « Google nous a donné toutes les raisons de ne pas lui faire confiance, avec deux décennies de violations de la vie privée à l'échelle mondiale. Je suppose qu'ils ont calculé que demander la permission — ce que la loi exige — freinerait leur capacité à pousser ce modèle. Et tout ce qui suivra. »

Ce « tout ce qui suivra » est inquiétant. Si Gemini Nano passe inaperçu aujourd'hui, que se passera-t-il quand Google voudra installer un modèle de 20 Go ? De 50 Go ? Le précédent est en train de s'écrire.

## Comment vérifier si tu es concerné

Pas besoin d'être un expert pour vérifier. Chrome propose une page interne dédiée.

### Méthode rapide

1. Ouvre Chrome
2. Tape dans la barre d'adresse : `chrome://on-device-internals/`
3. Clique sur l'onglet **« Model Status »**

Si un modèle est présent, tu verras sa version, sa taille et son emplacement. Si tu vois « Not Eligible », « Not Ready For Unknown Reason » ou « No On-device Feature Used » : tu n'es pas concerné. Pour l'instant.

### Les pré-requis techniques de Google

Google ne déploie Gemini Nano que sur les machines qui peuvent le faire tourner décemment :

- **Windows 10/11**, macOS Ventura+, ChromeOS
- **16 Go de RAM** minimum
- **22 Go d'espace disque** libre
- **Processeur 4 cœurs**
- **GPU avec 4 Go de VRAM**

Autrement dit : les machines récentes et puissantes. Celles qui ont précisément assez de ressources pour que Google n'ait pas à payer pour les siennes.

## Comment supprimer Gemini Nano (et empêcher son retour)

Si tu veux nettoyer ta machine, il faut procéder en deux étapes : désactiver les fonctionnalités, puis supprimer les fichiers.

### Désactivation via chrome://flags

1. Tape `chrome://flags` dans la barre d'adresse
2. Cherche `optimization-guide-on-device-model` → passe sur **Disabled**
3. Cherche `prompt-api-for-gemini-nano` → passe sur **Disabled**
4. Clique sur **Relancer**

### Suppression des fichiers

**Windows :** `%LOCALAPPDATA%\Google\Chrome\User Data\` → supprime le dossier `OptGuideOnDeviceModel`

**macOS :** `~/Library/Application Support/Google/Chrome/` → supprime le dossier `OptGuideOnDeviceModel`

**Linux :** `~/.config/google-chrome/` → supprime le dossier `OptGuideOnDeviceModel`

⚠️ Attention : une mise à jour future de Chrome peut réinitialiser ces paramètres et relancer le téléchargement. Il faudra refaire la manip.

### Solution radicale sous Windows (via le registre)

Pour les utilisateurs Windows qui veulent une protection permanente :

1. `Win + R` → tape `regedit`
2. Navigue vers `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome`
3. Crée une valeur **DWORD (32 bits)** nommée `GenAILocalFoundationalModelSettings` avec la valeur `1`
4. Redémarre le PC

Cette clé de registre force Chrome à ne jamais télécharger le modèle. C'est la méthode la plus fiable.

## Le contexte plus large : la bataille de l'IA locale

L'initiative de Google n'est pas isolée. Elle s'inscrit dans une tendance lourde : la course à l'**IA on-device**. Apple a intégré ses modèles Apple Intelligence directement dans l'iPhone 16. Samsung pousse Galaxy AI sur ses smartphones. Meta envisage des modèles intégrés à WhatsApp.

La logique est séduisante sur le papier : l'IA locale préserve la confidentialité (tes données ne quittent pas ton appareil), fonctionne hors connexion, et réduit la latence. Mais cette logique se heurte à une réalité brute — les modèles d'IA sont **gros**, **gourmands en énergie**, et **imposés sans consentement** quand ils sont intégrés à des produits que tout le monde utilise.

Le cas Chrome illustre parfaitement cette tension. Google vend l'IA locale comme un avantage pour l'utilisateur. En réalité, c'est surtout un avantage pour **les serveurs de Google**. Comme le souligne Hanff, l'équation est claire : chaque utilisateur qui fait tourner Gemini Nano sur sa machine, c'est un serveur en moins à payer.

Cette tension entre innovation technologique et respect des utilisateurs n'est pas nouvelle, mais elle atteint un niveau d'audace inédit. L'[histoire récente de l'IA est jalonnée de débats éthiques](/ia/ia-auto-replication-palisade-research-securite-2026) — de l'auto-réplication des modèles aux questions de souveraineté numérique. Le cas Chrome s'ajoute à la liste, avec une particularité : il touche potentiellement **les 3 milliards d'utilisateurs** du navigateur.

## Google I/O 2026 : le timing parfait

L'affaire éclate à quelques jours de la **Google I/O 2026**, prévue les 19 et 20 mai au Shoreline Amphitheatre de Mountain View. L'événement devrait être largement dominé par les annonces Gemini, avec des rumeurs insistantes sur l'arrivée de Google IA Overview en France et le lancement de nouvelles fonctionnalités embarquées.

Le déploiement silencieux de Gemini Nano dans Chrome pourrait bien être la première pierre d'un écosystème beaucoup plus ambitieux. Google prépare le terrain : une fois le modèle installé sur suffisamment de machines, il sera facile d'activer de nouvelles fonctionnalités IA d'un simple toggle côté serveur. L'infrastructure sera déjà là. Sur ton disque. Sans que tu n'aies jamais dit oui.

C'est une stratégie de déploiement qu'on avait déjà vue avec [d'autres géants de la tech qui réallouent massivement leurs ressources vers l'IA](/ia/deepseek-v4-open-source-guerre-prix-ia-2026) — sauf que cette fois, l'infrastructure est ton propre ordinateur.

## Les questions qui restent en suspens

Google a réagi publiquement par la voix d'un porte-parole interrogé par CNET : « En février, nous avons commencé à déployer la possibilité pour les utilisateurs de désactiver et de supprimer facilement le modèle directement dans les paramètres de Chrome. Une fois désactivé, le modèle ne sera plus téléchargé ni mis à jour. »

C'est la réponse classique : la possibilité de refus existe, donc tout va bien. Sauf que le principe du **consentement par défaut** — fondement du RGPD — exige que l'utilisateur soit informé *avant* l'installation, et qu'il doive donner son accord. Pas qu'il doive fouiller dans `chrome://flags` pour se rendre compte qu'un modèle de 4 Go vit sur son disque.

Les questions ouvertes sont nombreuses :

- **Combien d'utilisateurs** sont effectivement concernés ? Google ne communique aucun chiffre.
- **Quelles données** Gemini Nano collecte-t-il localement ? Le modèle peut théoriquement analyser le texte que tu tapes dans les champs de formulaire.
- **L'Europe sera-t-elle épargnée** durablement, ou le déploiement viendra-t-il avec la Google I/O ?
- **Quels modèles suivront ?** Gemini Nano est un modèle « léger ». Que se passe-t-il quand Google voudra pousser un modèle plus performant ?

## L'IA locale mérite mieux que le mode furtif

L'IA on-device n'est pas une mauvaise idée en soi. Exécuter des modèles localement pour préserver la vie privée, réduire la latence et fonctionner hors ligne — c'est même un objectif louable. Mais la méthode compte autant que l'objectif.

Ce que Google a fait avec Chrome 147, c'est installer un logiciel de 4 Go sur des millions de machines sans demander la permission. C'est un précédent. Si l'industrie tech l'accepte sans réagir, demain ce sera 20 Go. Après-demain, 50 Go. Et un jour, un modèle complet tournera en permanence sur ton PC, « pour ton bien », sans que tu n'aies jamais eu le choix.

Le respect des utilisateurs commence par la transparence. Google en a manqué cruellement sur cette affaire. La balle est désormais dans le camp des régulateurs européens — et dans le tien, quand tu vérifieras ce qui se cache dans `chrome://on-device-internals/`.

## Sources

- [Alexander Hanff, That Privacy Guy — « Chrome's Silent Nano Install »](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/) — That Privacy Guy, mai 2026
- [CNET — « Google Chrome May Have Quietly Installed a 4GB AI Model Onto Your Device »](https://www.cnet.com/tech/services-and-software/chrome-installing-4gb-ai-model-gemini-nano/) — CNET, mai 2026
- [Clubic — « Google Chrome installe tranquillement Gemini Nano sur votre PC, sans rien vous demander »](https://www.clubic.com/actualite-612079-google-chrome-installe-tranquillement-gemini-nano-sur-votre-pc-sans-rien-vous-demander.html) — Clubic, mai 2026
- [JustGeek — « Chrome peut télécharger un modèle IA de 4 Go sur votre PC »](https://www.justgeek.fr/chrome-supprimer-modele-ia-gemini-nano-150274/) — JustGeek, mai 2026
- [RTBF — « Google Chrome est accusé d'installer un modèle d'IA de 4 Go en douce »](https://www.rtbf.be/article/google-chrome-est-accuse-d-installer-un-modele-d-ia-de-4-go-en-douce-sur-certains-ordinateurs-11720151) — RTBF, mai 2026
- [Creati.ai — Actualités IA du 7 mai 2026](https://creati.ai/fr/ai-news/2026-05-07/) — Creati.ai, mai 2026
