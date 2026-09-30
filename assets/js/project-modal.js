(function () {
  var modal = document.getElementById('project-modal');
  if (!modal) return;

  var details = {
    'Arrow Gallery: Art Puzzle': ['Original game', 'An atmospheric art-puzzle experience built around illustrated scenes and visual discovery.', {
      highlights: ['Illustrated puzzle scenes', 'Visual discovery and atmosphere', 'Gameplay video and screenshots available'],
      gallery: [
        ['assets/img/projects/arrows/lantern-in-rain.png', 'Lantern in rain'],
        ['assets/img/projects/arrows/glasshouse-at-dawn.png', 'Glasshouse at dawn'],
        ['assets/img/projects/arrows/night-train.png', 'Night train compartment']
      ],
      youtube: '_R9WsINO3UM'
    }],
    'Word Keeper: Learn Vocabulary': ['Original game', 'A playful word-learning experience with a character-led visual system.', {
      highlights: ['Word-learning gameplay', 'Character-led visual identity', 'Vocabulary practice and progress tracking']
    }],
    'Rocket Evolution': ['Original game', 'A sci-fi mobile game built around rocket-themed progression and discovery.', {
      highlights: ['Rocket evolution and progression', 'Sci-fi visual direction', 'Progression-driven game loop']
    }],
    'Tunnel Racing': ['Original game', 'A fast-paced tunnel racer built around reactive steering, obstacle runs and vehicle progression.', {
      highlights: ['Reactive swipe steering', 'Vehicle selection and progression', 'Gameplay video and screenshots available'],
      gallery: [
        ['assets/img/projects/tunnel-racing/e7e223252143239.6a47bc26b3f88.jpg', 'Swipe controls'],
        ['assets/img/projects/tunnel-racing/368e66252143239.6a47bc240ea40.jpg', 'Tunnel run'],
        ['assets/img/projects/tunnel-racing/c872b2252143239.6a47bc26b3800.jpg', 'Vehicle selection'],
        ['assets/img/projects/tunnel-racing/d67ac3252143239.6a47bc240e3e3.jpg', 'In-game interface'],
        ['assets/img/projects/tunnel-racing/ea14e8252143239.6a47bc26b46a7.jpg', 'Achievements']
      ],
      youtube: 'ZZ2QT85Q9Wg'
    }],
    'Slimes Kingdom 1.0': ['Original game — classic version', 'The original Slimes Kingdom fantasy world built around expressive slime characters.', {
      highlights: ['Classic version', 'Character-driven fantasy world', 'Playful world-building']
    }],
    'Slimes Kingdom 2.0': ['Original game — new version', 'The updated Slimes Kingdom visual direction with refreshed characters and world artwork.', {
      highlights: ['New version', 'Updated visual direction', 'Refreshed characters and world artwork']
    }],
    'Fugitive Bombs': ['Original game', 'A game concept currently being prepared for a fuller public presentation.', {
      highlights: ['Original project', 'Project artwork available', 'More gameplay material coming soon']
    }],
    'Fighter Machines': ['Original game', 'A machine-combat game project centred on mechanical fighters and action.', {
      highlights: ['Mechanical fighter theme', 'Action-focused game concept', 'More project material coming soon']
    }],
    'Flappy Virus': ['Original game', 'A playful arcade project built around a virus character and quick runs.', {
      highlights: ['Arcade-inspired gameplay', 'Character-led visual direction', 'More project material coming soon']
    }],
    'Drill&Chill Idle Miner Tycoon': ['Commercial & team project', 'A selected collaboration project in this personal portfolio.', {
      highlights: ['Commercial and team collaboration', 'Idle-miner game direction', 'Selected project artwork']
    }],
    'Beach Ball': ['Commercial & team project', 'A selected collaboration project in this personal portfolio.', {
      highlights: ['Commercial and team collaboration', 'Selected project artwork', 'Additional details will be shared when cleared for publication']
    }],
    'Castle Clash: Tower Defense': ['Commercial & team project', 'A tower-defense collaboration project presented as part of the selected work.', {
      highlights: ['Tower-defense project', 'Commercial and team collaboration', 'Additional details will be shared when cleared for publication']
    }],
    'Pikamoon': ['Commercial & team project', 'A game collaboration presented as part of the selected portfolio work.', {
      highlights: ['Game collaboration', 'Selected project artwork', 'Additional details will be shared when cleared for publication']
    }],
    'Water Sort Puzzle: Color Tubes': ['Commercial & team project', 'A color-sorting puzzle project presented as part of the selected portfolio work.', {
      highlights: ['Color-sorting puzzle gameplay', 'Commercial and team collaboration', 'Additional details will be shared when cleared for publication']
    }],
    'The Matrix': ['Commercial & team project', 'A selected game collaboration in this personal portfolio.', {
      highlights: ['Commercial and team collaboration', 'Selected project artwork', 'Additional details will be shared when cleared for publication']
    }],
    'Knight with Tactics': ['Commercial & team project', 'A tactical game collaboration presented as part of the selected portfolio work.', {
      highlights: ['Tactical game direction', 'Commercial and team collaboration', 'Additional details will be shared when cleared for publication']
    }]
  };

  var googlePlayLinks = {
    'Word Keeper: Learn Vocabulary': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.WordKeeper',
    'Rocket Evolution': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.RocketEvolution',
    'Tunnel Racing': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.Tunnelracing',
    'Slimes Kingdom 1.0': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.Slimeskingdom',
    'Slimes Kingdom 2.0': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.Slimeskingdom',
    'Arrow Gallery: Art Puzzle': 'https://play.google.com/store/apps/details?id=com.RayMarkSgames.ArrowGalleryArtPuzzle',
    'Drill&Chill Idle Miner Tycoon': 'https://play.google.com/store/apps/details?id=org.smapps.digger',
    'Water Sort Puzzle: Color Tubes': 'https://play.google.com/store/apps/details?id=com.OptorGroup.ColorTheDrawingGame&utm_source=emea_Med',
    'Castle Clash: Tower Defense': 'https://play.google.com/store/apps/details?id=com.OptorGroup.WarStrategyOfBattleClans&utm_source=emea_Med'
  };

  var projectOverviews = {
    'Arrow Gallery: Art Puzzle': 'Arrow Gallery: Art Puzzle combines illustrated puzzle scenes with a calm, discovery-led pace. Each setting is designed as a small visual story, giving the player space to explore the artwork and find the next path.',
    'Word Keeper: Learn Vocabulary': 'Word Keeper: Learn Vocabulary is a character-led word-learning experience. The project combines vocabulary practice, progress tracking and friendly visual feedback into a focused daily-learning flow.',
    'Rocket Evolution': 'Rocket Evolution is a sci-fi game built around progression, upgrades and a growing rocket collection. Its presentation focuses on a bold space aesthetic and a clear sense of advancement.',
    'Tunnel Racing': 'Tunnel Racing is a high-speed arcade racer where players react to obstacles, choose vehicles and push further through the tunnel. The game focuses on readable controls, fast decisions and progression.',
    'Slimes Kingdom 1.0': 'Slimes Kingdom 1.0 is the original version of the fantasy world led by expressive slime characters. The gallery preserves its bright, playful direction and the core environments created for the project.',
    'Slimes Kingdom 2.0': 'Slimes Kingdom 2.0 presents the refreshed version of the project, with updated visual direction, characters and world artwork. It is shown separately so the evolution of the game is clear.',
    'Fugitive Bombs': 'Fugitive Bombs is an original project. The current gallery collects the available visual materials while the fuller project presentation is still being prepared.',
    'Fighter Machines': 'Fighter Machines explores action through mechanical fighters and combat-focused visuals. The project gallery collects the currently available game artwork and concepts.',
    'Flappy Virus': 'Flappy Virus is a fast, playful arcade concept built around a distinct virus character. The project focuses on immediate, readable action and a strong visual hook.',
    'Drill&Chill Idle Miner Tycoon': 'Drill&Chill Idle Miner Tycoon is included as a selected commercial and team project. The gallery follows the curated order of the available visual materials.',
    'Beach Ball': 'Beach Ball is presented as selected commercial and team work. The gallery gathers the visual material currently cleared for this portfolio.',
    'Castle Clash: Tower Defense': 'Castle Clash: Tower Defense is a selected team collaboration in the tower-defense genre. The page presents the currently available gameplay and visual material.',
    'Pikamoon': 'Pikamoon is included as a selected collaboration project. The gallery shows the materials currently available for public presentation.',
    'Water Sort Puzzle: Color Tubes': 'Water Sort Puzzle: Color Tubes is a colour-sorting puzzle project included in the selected collaboration work. The gallery contains the available project presentation material.',
    'The Matrix': 'The Matrix is a selected commercial and team project. The gallery collects the visual material currently available for this portfolio.',
    'Knight with Tactics': 'Knight with Tactics is a tactical game collaboration included in the selected portfolio work. More project material can be added as it becomes available.'
  };

  var ukrainianProjectCopy = {
    'Arrow Gallery: Art Puzzle': ['Оригінальна гра', 'Атмосферна арт-головоломка, побудована навколо ілюстрованих сцен і візуальних відкриттів.', 'Arrow Gallery: Art Puzzle поєднує ілюстровані сцени з повільним темпом дослідження. Кожна локація — маленька візуальна історія, у якій можна шукати наступний шлях.'],
    'Word Keeper: Learn Vocabulary': ['Оригінальна гра', 'Грайливий досвід вивчення слів із візуальною системою навколо персонажа.', 'Word Keeper: Learn Vocabulary поєднує практику лексики, відстеження прогресу й дружній візуальний зворотний зв’язок у щоденному навчальному процесі.'],
    'Rocket Evolution': ['Оригінальна гра', 'Науково-фантастична мобільна гра про розвиток ракет і відкриття.', 'Rocket Evolution — sci-fi гра про прогрес, покращення та колекцію ракет, із виразною космічною естетикою.'],
    'Tunnel Racing': ['Оригінальна гра', 'Динамічний тунельний рейсер із реактивним керуванням, перешкодами й прогресією транспорту.', 'Tunnel Racing — швидкісний аркадний рейсер, де гравець реагує на перешкоди, обирає транспорт і просувається дедалі далі тунелем.'],
    'Slimes Kingdom 1.0': ['Оригінальна гра — класична версія', 'Оригінальний світ Slimes Kingdom із виразними персонажами-слизнями.', 'Slimes Kingdom 1.0 — початкова версія фентезійного світу зі слизнями. Галерея зберігає її яскравий, грайливий візуальний напрям.'],
    'Slimes Kingdom 2.0': ['Оригінальна гра — нова версія', 'Оновлений візуальний напрям Slimes Kingdom із новими персонажами та світом.', 'Slimes Kingdom 2.0 показує оновлену версію проєкту з новим візуальним напрямом, персонажами та ілюстраціями світу.'],
    'Fighter Machines': ['Оригінальна гра', 'Проєкт бойової гри про механічних бійців і динамічну дію.', 'Fighter Machines досліджує механічний бій через бойових персонажів і візуали, зосереджені на екшені.'],
    'Flappy Virus': ['Оригінальна гра', 'Грайливий аркадний проєкт навколо персонажа-вірусу та швидких забігів.', 'Flappy Virus — швидка аркадна концепція з виразним персонажем-вірусом і зрозумілим, миттєвим геймплеєм.'],
    'Fugitive Bombs': ['Оригінальна гра', 'Ігрова концепція, для якої готується повніша публічна презентація.', 'Fugitive Bombs — оригінальний проєкт. У галереї зібрані доступні візуальні матеріали.'],
    'Drill&Chill Idle Miner Tycoon': ['Комерційний і командний проєкт', 'Вибраний проєкт співпраці у персональному портфоліо.', 'Drill&Chill Idle Miner Tycoon — вибраний комерційний і командний проєкт. Галерея зберігає підготовлений порядок візуальних матеріалів.'],
    'Pikamoon': ['Комерційний і командний проєкт', 'Ігрова співпраця, представлена у вибраному портфоліо.', 'Pikamoon представлений як вибраний проєкт співпраці з доступними для публікації матеріалами.'],
    'Castle Clash: Tower Defense': ['Комерційний і командний проєкт', 'Командний tower-defense проєкт у вибраних роботах.', 'Castle Clash: Tower Defense — вибраний командний проєкт у жанрі tower defense з доступними геймплейними та візуальними матеріалами.'],
    'Water Sort Puzzle: Color Tubes': ['Комерційний і командний проєкт', 'Головоломка із сортуванням кольорів у вибраних роботах.', 'Water Sort Puzzle: Color Tubes — головоломка із сортуванням кольорів, представлена серед вибраних командних робіт.'],
    'Knight with Tactics': ['Комерційний і командний проєкт', 'Тактична ігрова співпраця з вибраного портфоліо.', 'Knight with Tactics — тактичний ігровий проєкт співпраці у вибраному портфоліо.'],
    'Beach Ball': ['Комерційний і командний проєкт', 'Вибраний проєкт співпраці в персональному портфоліо.', 'Beach Ball представлено серед вибраних комерційних і командних робіт.'],
    'The Matrix': ['Комерційний і командний проєкт', 'Вибраний ігровий проєкт співпраці в персональному портфоліо.', 'The Matrix — вибраний комерційний і командний проєкт із доступними візуальними матеріалами.']
  };

  function modalText(key) {
    var ukrainian = { gallery: 'Галерея проєкту', overview: 'Про проєкт', play: 'Переглянути в Google Play', youtube: 'Дивитися на YouTube', close: 'Закрити деталі проєкту', previous: 'Попередній проєкт', next: 'Наступний проєкт' };
    var english = { gallery: 'Project gallery', overview: 'About the project', play: 'View on Google Play', youtube: 'Watch on YouTube', close: 'Close project details', previous: 'Previous project', next: 'Next project' };
    return (window.portfolioLanguage === 'uk' ? ukrainian : english)[key];
  }

  function projectImages(folder, names) {
    var visibleNames = names.filter(function (name) {
      return folder !== 'wordkeeper' || (name.indexOf('Icons/') !== 0 && name.indexOf('Notifiacation/') !== 0);
    });
    return visibleNames.map(function (name, index) {
      return ['assets/img/projects/' + folder + '/' + name, 'Project visual ' + (index + 1)];
    });
  }

  /* Every visual supplied for a project lives in its popup. Image loading remains lazy. */
  // Gallery lists predate the public display names. These aliases retain the lists
  // while the cards and modal consistently use the new product titles.
  details['Arrows'] = details['Arrow Gallery: Art Puzzle'];
  details['WordKeeper'] = details['Word Keeper: Learn Vocabulary'];
  details['Slimes Kingdom (Classic)'] = details['Slimes Kingdom 1.0'];
  details['Slimes Kingdom (New)'] = details['Slimes Kingdom 2.0'];
  details['Arrows'][2].gallery = projectImages('arrows', '001_lantern_in_rain.png|004_glasshouse_at_dawn.png|014_night_train_compartment.png|019_twilight_caravan.png|026_cloud_bridge.png|037_autumn_greenhouse.png|048_cloud_workshop.png|049_comet_station.png|1080x1920.png|512х512.png|Зображення ChatGPT 28 вер. 2026 р., 23_31_04.png|Зображення Codex 26 вер. 2026 р., 00_59_33 (1).png|Image Sequence_011_0523.jpg|Image Sequence_011_0603.jpg|Image Sequence_011_0717.jpg|Image Sequence_011_1361.jpg|Image Sequence_011_1473.jpg|Image Sequence_012_0000.jpg'.split('|'));
  details['WordKeeper'][2].gallery = projectImages('wordkeeper', '1024_1024.png|1024_500 2.png|PlayMarketDone/1.png|PlayMarketDone/2.png|PlayMarketDone/3.png|PlayMarketDone/4.png|PlayMarketDone/5.png|PlayMarketDone/6.png|PlayMarketDone/7.png|PlayMarketDone/8.png|PlayMarketDone/Other/call_VFV1Zzyy98ccoUJ97DzewYNm.png|PlayMarketDone/Other/exec-7bcf92fb-73a4-4e73-9ac7-5f4bb04043c7.png|PlayMarketDone/Other/exec-8a39d55c-08f1-41c5-b7e1-0e3882831a59.png|PlayMarketDone/Other/exec-96948dcf-f249-4a70-84dd-dd3d7dfb4066.png|PlayMarketDone/Other/exec-a6c486ec-93ec-48b1-9279-42d3bd5f76da.png|PlayMarketDone/Other/exec-bf06837f-b843-47f7-97ad-5f8209e221e9.png|PlayMarketDone/Other/exec-c5a78d71-34c8-48b5-a82c-8c157a0605d8.png|PlayMarketDone/Other/exec-e4279fc1-c041-40a1-8868-01278dab86c8.png|PlayMarketDone/Other/exec-e6d54e53-0f1e-49a4-9c45-0614fd62dc23.png|PlayMarketDone/Other/exec-e8a57fff-a889-463a-9bd0-a21e6968709e.png|PlayMarketDone/Other/exec-f4adf4b5-4fa4-4521-acc2-5d73686af577.png|PlayMarketDone/Other/exec-f59586ba-9063-4bb3-8f1b-c9e00b4a7f40.png|states/keeper_book_empty_state_v1.png|states/keeper_book_encourage_v1.png|states/keeper_book_explain_v1.png|states/keeper_book_practice_ready_v1.png|states/keeper_book_proud_v1.png|states/keeper_book_reminder_v1.png|states/keeper_book_success_v1.png|states/keeper_book_thinking_v1.png|states/keeper_book_welcome_v1.png|Icons/achievement_first_step-v2.png|Icons/achievement_first_step.png|Icons/achievement_practice_master-v2.png|Icons/achievement_practice_master.png|Icons/achievement_return-v2.png|Icons/achievement_return.png|Icons/achievement_streak-v2.png|Icons/achievement_streak.png|Icons/achievement_word_scholar-v2.png|Icons/achievement_word_scholar.png|Icons/keeper_celebration.png|Icons/navigation/nav_achievements.png|Icons/navigation/nav_add.png|Icons/navigation/nav_more.png|Icons/navigation/nav_practice.png|Icons/navigation/nav_premium.png|Icons/navigation/nav_profile.png|Icons/navigation/nav_settings.png|Icons/navigation/nav_words.png|Icons/topics/topic_books.png|Icons/topics/topic_daily_life.png|Icons/topics/topic_games.png|Icons/topics/topic_it.png|Icons/topics/topic_study.png|Icons/topics/topic_travel.png|Icons/topics/topic_work.png|Notifiacation/keeper_launcher_happy_v2.png|Notifiacation/keeper_launcher_urgent_v3.png|Notifiacation/keeper_launcher_waiting_v3.png|Notifiacation/notification_keeper_happy_v1.png|Notifiacation/notification_keeper_urgent_v1.png|Notifiacation/notification_keeper_waiting_v1.png'.split('|'));
  details['Rocket Evolution'][2].gallery = projectImages('rocket-evolution', '1024x1024.png|Logo.png|images/053233252149119.6a47d84f2ee8c.jpg|images/151bfe252149119.6a47d84f30212.jpg|images/4aeb52252149119.6a47d84f30861.jpg|images/4e5646252149119.6a47d84f2fbc4.jpg|images/762f59252149119.6a47d84e7b0ce.png|images/815db4252149119.6a47d84fafe0c.png|images/a40eda252149119.6a47d84e7b46b.png|images/d0c857252149119.6a47d84e7adc2.png|images/dd6973252149119.6a47d84f2f51d.jpg|images/e046d5252149119.6a47d84f30e3b.png|images/fae03b252149119.6a47d84e7a97d.png'.split('|'));
  details['Tunnel Racing'][2].gallery = projectImages('tunnel-racing', 'Avatar1024x1024.png|images/209b2c252143239.6a47bc240ddbf.png|images/368e66252143239.6a47bc240ea40.jpg|images/72de74252143239.6a47bc271bb3a.png|images/c872b2252143239.6a47bc26b3800.jpg|images/d67ac3252143239.6a47bc240e3e3.jpg|images/e7e223252143239.6a47bc26b3f88.jpg|images/ea14e8252143239.6a47bc26b46a7.jpg'.split('|'));
  details['Slimes Kingdom (Classic)'][2].gallery = projectImages('slimes-kingdom-10', 'images/286b9e252138833.6a47ac3bcd939.jpg|images/2c72c4252138833.6a47ac3bccc8a.jpg|images/8a4a2a252138833.6a47ac3c51cc4.jpg|images/a8210b252138833.6a47ac3c517f9.jpg|images/b0f42d252138833.6a47ac3cb4db2.png|images/b7a617252138833.6a47ac3ae12f5.gif|images/e73ac1252138833.6a47ac3ae171b.gif|images/ee0af8252138833.6a47ac3bcd2db.jpg'.split('|'));
  details['Slimes Kingdom (New)'][2].gallery = projectImages('slimes-kingdom-20', 'images/0b2f6b252148663.6a47d5ffd5368.png|images/1ec1a7252148663.6a47d60083493.png|images/659738252148663.6a47d60084b46.png|images/a4822c252148663.6a47d60083bfa.png|images/c3b360252148663.6a47d5ffd595b.png|images/cc5363252148663.6a47d5ffd4d72.png|images/e1a2a4252148663.6a47d5febff77.png|images/ef47c8252148663.6a47d5ffd4018.png|images/f41e4b252148663.6a480b0e48a83.png|images/ff73da252148663.6a47d5ffd4687.png|images/Illustration_slime-kingdom_10.jpg|images/Slimes-kingdom-art.jpg'.split('|'));
  details['Fugitive Bombs'][2].gallery = projectImages('fugitive-bombs', '1024х500.png|20200909_152119.png|20200909_152154.png|20200909_152226.png|512х512.png'.split('|'));
  details['Fighter Machines'][2].gallery = projectImages('fighter-machines', '512х512.png|images/082abb252134887.6a4792a2c7bda.jpg|images/3be3a2252134887.6a4792a2c8270.jpg|images/3f1659252134887.6a4792a2c7f5b.jpg|images/7d339a252134887.6a4792a333937.png|images/95a2cd252134887.6a4792a333c97.png'.split('|'));
  details['Flappy Virus'][2].gallery = projectImages('flappy-virus', '512х512.png|images/03dada252134017.6a478f5bb5459.png|images/2f49a1252134017.6a478de1925e1.png|images/5e41f0252134017.6a478f5bb50df.jpg|images/dbb0b3252134017.6a478f5bb579f.jpg'.split('|'));
  details['Beach Ball'][2].gallery = projectImages('beach-ball', 'images/34eaba252164333.6a48320b8ed62.jpg|images/5e1b42252164333.6a48320b8f2c3.jpg|images/d2327c252164333.6a48320b8f8de.jpg'.split('|'));
  details['Castle Clash: Tower Defense'][2].gallery = projectImages('castle-clash-tower-defense', 'images/1d0266252164849.6a48373d5e0af.jpg|images/2ec88a252164849.6a48373d0d33b.jpg|images/b7cfcf252164849.6a48373cb28dc.jpg|images/c3ac4d252164849.6a48373d0cee2.jpg|images/d4d665252164849.6a48373cb21ce.jpg'.split('|'));
  details['Pikamoon'][2].gallery = projectImages('pikamoon', 'images/265324252159111.6a480c3ea3079.png|images/26567d252159111.6a480c3e1a8bf.png|images/367cbf252159111.6a480c3ea1f5e.png|images/b51057252159111.6a480c3e1a0b9.png|images/d47f6a252159111.6a480c3ea16eb.png|images/d84097252159111.6a480c3ea27cb.png'.split('|'));
  details['Water Sort Puzzle: Color Tubes'][2].gallery = projectImages('water-sort-puzzle-color-tubes', 'images/fe0880252166307.6a484996d9456.png'.split('|'));
  details['The Matrix'][2].gallery = projectImages('the-matrix', 'images/28730e252136465.6a479f6b016c1.jpg|images/2f8269252136465.6a479f6b02360.png|images/4c2c8f252136465.6a479f6b01cea.png|images/7769dd252136465.6a479fb79e9e2.jpg|images/7e3b85252136465.6a479f6b01036.png|images/8b82eb252136465.6a479b55486df.jpg'.split('|'));
  details['Knight with Tactics'][2].gallery = projectImages('knight-with-tactics', 'images/796c00252183207.6a48fb9bef91d.png'.split('|'));
  delete details['Arrows'];
  delete details['WordKeeper'];
  delete details['Slimes Kingdom (Classic)'];
  delete details['Slimes Kingdom (New)'];

  // The source folders are curated in this exact sequence. Keep their numeric order
  // instead of sorting by filename, so every project tells the intended visual story.
  var curatedGalleryOrder = {
    'Arrow Gallery: Art Puzzle': ['arrows', '1.png|2.jpg|3.jpg|4.jpg|5.jpg|6.jpg|7.jpg|8.png|9.png|10.png|11.png|12.png|13.png|14.png|15.png|16.png'],
    'Word Keeper: Learn Vocabulary': ['wordkeeper', '0.png|1.png|2.png|3.png|4.png|5.png|6.png|7.png|8.png'],
    'Rocket Evolution': ['rocket-evolution', 'images/1.png|images/2.png|images/3.png|images/4.png|images/5.png|images/6.jpg|images/7.jpg|images/8.jpg|images/9.jpg|images/10.jpg'],
    'Tunnel Racing': ['tunnel-racing', 'images/1.png|images/3.png|images/4.jpg|images/5.jpg|images/6.jpg|images/7.jpg|images/8.jpg'],
    'Slimes Kingdom 1.0': ['slimes-kingdom-10', 'images/1.gif|images/2.gif|images/3.png|images/4.jpg|images/5.jpg|images/6.jpg'],
    'Slimes Kingdom 2.0': ['slimes-kingdom-20', 'images/1.png|images/2.jpg|images/3.png|images/4.png|images/5.png|images/6.png|images/7.png|images/8.png|images/9.png|images/10.png|images/11.png'],
    'Fighter Machines': ['fighter-machines', 'images/1.png|images/2.jpg|images/2.png|images/3.jpg'],
    'Flappy Virus': ['flappy-virus', 'images/1.png|images/2.jpg|images/3.png|images/4.jpg'],
    'Fugitive Bombs': ['fugitive-bombs', '1.png|2.png|3.png|4.png'],
    'Drill&Chill Idle Miner Tycoon': ['drill-chill-idle-miner-tycoon', '1.png|2.png|3.png|4.png|5.png|6.png|7.png|8.png'],
    'Pikamoon': ['pikamoon', 'images/1.png|images/2.png|images/3.png|images/4.png|images/5.png|images/6.png'],
    'Castle Clash: Tower Defense': ['castle-clash-tower-defense', 'images/1.jpg|images/2.jpg|images/3.jpg|images/4.jpg|images/5.jpg'],
    'Water Sort Puzzle: Color Tubes': ['water-sort-puzzle-color-tubes', 'images/1.png'],
    'Knight with Tactics': ['knight-with-tactics', 'images/1.png'],
    'Beach Ball': ['beach-ball', 'images/1.jpg|images/2.jpg|images/3.jpg|images/4.jpg|images/5.jpg'],
    'The Matrix': ['the-matrix', 'images/1.jpg|images/2.png|images/3.png|images/4.png|images/5.jpg']
  };
  Object.keys(curatedGalleryOrder).forEach(function (projectTitle) {
    var source = curatedGalleryOrder[projectTitle];
    details[projectTitle][2].gallery = projectImages(source[0], source[1].split('|'));
  });

  var title = document.getElementById('project-modal-title');
  var category = document.getElementById('project-modal-category');
  var description = document.getElementById('project-modal-description');
  var extra = document.getElementById('project-modal-extra');
  var image = document.getElementById('project-modal-image');
  var dialog = modal.querySelector('.project-modal__dialog');
  var scrollRail = document.getElementById('project-modal-scroll-rail');
  var scrollThumb = document.getElementById('project-modal-scroll-thumb');
  var storeLink = document.getElementById('project-modal-store-link');
  var youtubeLink = document.getElementById('project-modal-youtube-link');
  var navigatorList = document.getElementById('project-modal-navigator-list');
  var projectCards = Array.prototype.slice.call(document.querySelectorAll('.portfolio-showcase-grid figure'));
  var lastFocusedElement;
  var activeProjectIndex = 0;
  var navigatorWheelLocked = false;
  var scrollRailDragOffset = 0;

  function updateDialogScrollRail() {
    if (modal.hidden) return;
    var dialogBounds = dialog.getBoundingClientRect();
    var railTop = dialogBounds.top + 70;
    var railHeight = Math.max(0, dialogBounds.height - 94);
    var scrollableDistance = dialog.scrollHeight - dialog.clientHeight;
    if (scrollableDistance <= 1 || railHeight <= 0) {
      scrollRail.hidden = true;
      return;
    }
    var thumbHeight = Math.max(38, Math.round(railHeight * (dialog.clientHeight / dialog.scrollHeight)));
    var availableTravel = railHeight - thumbHeight;
    var progress = dialog.scrollTop / scrollableDistance;
    scrollRail.style.top = railTop + 'px';
    scrollRail.style.left = (dialogBounds.right - 37) + 'px';
    scrollRail.style.height = railHeight + 'px';
    scrollThumb.style.height = thumbHeight + 'px';
    scrollThumb.style.transform = 'translateY(' + (availableTravel * progress) + 'px)';
    scrollRail.hidden = false;
  }

  function scrollDialogFromRailPosition(clientY) {
    var railBounds = scrollRail.getBoundingClientRect();
    var thumbHeight = scrollThumb.getBoundingClientRect().height;
    var travel = Math.max(0, railBounds.height - thumbHeight);
    var thumbTop = Math.max(0, Math.min(travel, clientY - railBounds.top - scrollRailDragOffset));
    var progress = travel ? thumbTop / travel : 0;
    dialog.scrollTop = progress * (dialog.scrollHeight - dialog.clientHeight);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('project-modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function openModal(card, preserveFocus) {
    var caption = card.querySelector('figcaption');
    var artwork = card.querySelector('img');
    if (!caption || !artwork) return;
    var projectTitle = caption.textContent.trim();
    var projectDetails = details[projectTitle] || ['Project', 'Project information is being prepared for publication.'];
    var localizedCopy = window.portfolioLanguage === 'uk' ? ukrainianProjectCopy[projectTitle] : null;
    if (!preserveFocus) lastFocusedElement = card;
    activeProjectIndex = projectCards.indexOf(card);
    title.textContent = projectTitle;
    category.textContent = localizedCopy ? localizedCopy[0] : projectDetails[0];
    description.textContent = localizedCopy ? localizedCopy[1] : projectDetails[1];
    image.src = artwork.currentSrc || artwork.src;
    image.alt = artwork.alt;
    if (googlePlayLinks[projectTitle]) {
      storeLink.href = googlePlayLinks[projectTitle];
      storeLink.innerHTML = modalText('play') + ' <i class="fa fa-external-link"></i>';
      storeLink.hidden = false;
    } else {
      storeLink.removeAttribute('href');
      storeLink.hidden = true;
    }
    if (projectDetails[2] && projectDetails[2].youtube) {
      youtubeLink.href = 'https://www.youtube.com/watch?v=' + projectDetails[2].youtube;
      youtubeLink.innerHTML = '<i class="fa fa-youtube-play"></i> ' + modalText('youtube') + ' <i class="fa fa-external-link"></i>';
      youtubeLink.hidden = false;
    } else {
      youtubeLink.removeAttribute('href');
      youtubeLink.hidden = true;
    }
    extra.replaceChildren();
    renderExtra(projectDetails[2], projectTitle);
    dialog.scrollTop = 0;
    updateProjectNavigator();
    modal.hidden = false;
    document.body.classList.add('project-modal-open');
    dialog.focus();
    window.requestAnimationFrame(updateDialogScrollRail);
  }

  dialog.addEventListener('scroll', updateDialogScrollRail, { passive: true });
  window.addEventListener('resize', updateDialogScrollRail);
  window.addEventListener('portfolio:languagechange', function () {
    modal.querySelector('.project-modal__close').setAttribute('aria-label', modalText('close'));
    modal.querySelector('[data-project-modal-previous]').setAttribute('aria-label', modalText('previous'));
    modal.querySelector('[data-project-modal-next]').setAttribute('aria-label', modalText('next'));
    if (!modal.hidden) openModal(projectCards[activeProjectIndex], true);
  });
  scrollRail.addEventListener('pointerdown', function (event) {
    if (scrollRail.hidden) return;
    var thumbBounds = scrollThumb.getBoundingClientRect();
    scrollRailDragOffset = event.target === scrollThumb ? event.clientY - thumbBounds.top : thumbBounds.height / 2;
    scrollRail.classList.add('is-dragging');
    scrollRail.setPointerCapture(event.pointerId);
    scrollDialogFromRailPosition(event.clientY);
    event.preventDefault();
  });
  scrollRail.addEventListener('pointermove', function (event) {
    if (!scrollRail.classList.contains('is-dragging')) return;
    scrollDialogFromRailPosition(event.clientY);
  });
  function endScrollRailDrag(event) {
    if (!scrollRail.classList.contains('is-dragging')) return;
    scrollRail.classList.remove('is-dragging');
    if (scrollRail.hasPointerCapture(event.pointerId)) scrollRail.releasePointerCapture(event.pointerId);
  }
  scrollRail.addEventListener('pointerup', endScrollRailDrag);
  scrollRail.addEventListener('pointercancel', endScrollRailDrag);

  function updateProjectNavigator() {
    var controls = navigatorList.querySelectorAll('button');
    navigatorList.style.transform = 'translateY(' + (187 - activeProjectIndex * 73) + 'px)';
    controls.forEach(function (control, index) {
      var distance = Math.abs(index - activeProjectIndex);
      control.classList.toggle('is-active', index === activeProjectIndex);
      control.classList.toggle('is-near', distance === 1);
      control.classList.toggle('is-edge', distance === 2);
      control.classList.toggle('is-far', distance > 2);
      control.setAttribute('aria-current', index === activeProjectIndex ? 'true' : 'false');
      if (index === activeProjectIndex && window.matchMedia('(max-width: 767px)').matches) {
        control.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      }
    });
  }

  function switchProject(direction) {
    var nextIndex = (activeProjectIndex + direction + projectCards.length) % projectCards.length;
    openModal(projectCards[nextIndex], true);
  }

  function buildProjectNavigator() {
    projectCards.forEach(function (card, index) {
      var caption = card.querySelector('figcaption');
      var artwork = card.querySelector('img');
      if (!caption || !artwork) return;
      var projectTitle = caption.textContent.trim();
      var control = document.createElement('button');
      var thumbnail = document.createElement('img');
      control.type = 'button';
      control.className = 'project-modal__navigator-item';
      control.setAttribute('aria-label', 'Open ' + projectTitle);
      control.title = projectTitle;
      thumbnail.src = artwork.currentSrc || artwork.src;
      thumbnail.alt = '';
      control.append(thumbnail);
      control.addEventListener('click', function () { openModal(projectCards[index], true); });
      navigatorList.append(control);
    });
  }

  function renderExtra(projectExtra, projectTitle) {
    if (!projectExtra) return;
    if (projectExtra.video) {
      var videoSection = document.createElement('section');
      var videoHeading = document.createElement('h3');
      var video = document.createElement('video');
      videoSection.className = 'project-modal__section';
      videoHeading.textContent = 'Video';
      video.className = 'project-modal__video';
      video.controls = true;
      video.preload = 'metadata';
      video.src = projectExtra.video;
      videoSection.append(videoHeading, video);
      extra.append(videoSection);
    }
    if (projectExtra.gallery && projectExtra.gallery.length) {
      var gallerySection = document.createElement('section');
      var galleryHeading = document.createElement('h3');
      var gallery = document.createElement('div');
      gallerySection.className = 'project-modal__section';
      galleryHeading.textContent = modalText('gallery');
      gallery.className = 'project-modal__gallery';
      projectExtra.gallery.forEach(function (item) {
        var figure = document.createElement('figure');
        var galleryImage = document.createElement('img');
        galleryImage.src = item[0];
        galleryImage.alt = item[1];
        galleryImage.loading = 'lazy';
        galleryImage.addEventListener('load', function () {
          var ratio = galleryImage.naturalWidth / galleryImage.naturalHeight;
          figure.classList.add(ratio > 1.25 ? 'is-landscape' : ratio < .8 ? 'is-portrait' : 'is-square');
          window.requestAnimationFrame(updateDialogScrollRail);
        });
        figure.append(galleryImage);
        gallery.append(figure);
      });
      gallerySection.append(galleryHeading, gallery);
      extra.append(gallerySection);
    }
    if (projectOverviews[projectTitle]) {
      var overviewSection = document.createElement('section');
      var overviewHeading = document.createElement('h3');
      var overview = document.createElement('p');
      overviewSection.className = 'project-modal__section project-modal__overview';
      overviewHeading.textContent = modalText('overview');
      overview.textContent = window.portfolioLanguage === 'uk' && ukrainianProjectCopy[projectTitle] ? ukrainianProjectCopy[projectTitle][2] : projectOverviews[projectTitle];
      overviewSection.append(overviewHeading, overview);
      extra.append(overviewSection);
    }
  }

  buildProjectNavigator();

  projectCards.forEach(function (card) {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open details for ' + card.querySelector('figcaption').textContent.trim());
    card.addEventListener('click', function () { openModal(card); });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  modal.querySelectorAll('[data-project-modal-close]').forEach(function (control) {
    control.addEventListener('click', closeModal);
  });
  modal.querySelector('[data-project-modal-previous]').addEventListener('click', function () { switchProject(-1); });
  modal.querySelector('[data-project-modal-next]').addEventListener('click', function () { switchProject(1); });
  navigatorList.parentElement.addEventListener('wheel', function (event) {
    if (Math.abs(event.deltaY) < 8 || navigatorWheelLocked) return;
    event.preventDefault();
    navigatorWheelLocked = true;
    switchProject(event.deltaY > 0 ? 1 : -1);
    window.setTimeout(function () { navigatorWheelLocked = false; }, 260);
  }, { passive: false });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
    if (event.key === 'ArrowLeft' && !modal.hidden) switchProject(-1);
    if (event.key === 'ArrowRight' && !modal.hidden) switchProject(1);
  });
})();
