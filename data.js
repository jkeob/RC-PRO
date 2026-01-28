// Ranger Challenge Training Data
// Restructured for Learn/Test mode with worksheet-style scenarios

const APP_DATA = {
  categories: [
    {
      id: 'weapons',
      title: 'Weapons',
      icon: 'weapon',
      accentColor: '#f85149',
      tasks: [
        {
          id: 'w1-m4',
          title: 'M4/M16 Rifle',
          timeStandard: '30 seconds',
          taskBasis: '071-COM-0028, 071-COM-0027, 071-COM-0030',
          conditions: 'You are a member of a team conducting combat operations. You have a stoppage while engaging targets with your M4/M16.',
          standards: 'Correctly perform all steps, in sequence, in 30 seconds or less.',
          steps: [
            {
              title: 'Clear the weapon',
              substeps: [
                'Keep the weapon pointed in a safe direction',
                'Attempt to place the weapon on SAFE',
                'Lock the bolt to the rear',
                'Pull the charging handle rearward. Press and hold the bottom of the bolt catch',
                'Allow bolt to move forward until it engages the bolt catch. Release the bottom of the bolt catch',
                'Return the charging handle to the forward position',
                'Ensure the receiver and chamber are free of ammo. Place weapon on SAFE'
              ]
            },
            {
              title: 'Load the weapon',
              substeps: [
                'Insert the magazine',
                'Push the magazine upwards until the magazine catch engages',
                'Tap upward on the bottom of the magazine to ensure the magazine is seated',
                'Press the upper portion of the bolt catch allowing the bolt to go forward and chamber a round. The bolt will not be ridden forward',
                'Tap forward assist to ensure that bolt is fully forward and locked',
                'The weapon is now loaded'
              ]
            },
            {
              title: 'Engage target',
              substeps: [
                'Place the weapon on SEMI and begin engaging your target'
              ]
            },
            {
              title: 'Perform immediate action (SPORTS)',
              substeps: [
                'Tap the bottom of the magazine firmly',
                'Rapidly pull charging handle and release to extract/eject previous cartridge and feed/chamber/lock new round',
                'Reassess by continuing the shot process. Weapon should fire. If weapon does not fire, proceed to remedial action'
              ]
            },
            {
              title: 'Clear the weapon (final)',
              substeps: [
                'Point weapon in safe direction. Attempt to place weapon on SAFE',
                'Remove magazine from weapon',
                'Lock the bolt open (if not already)',
                'Pull the charging handle rearward. Press the bottom of the bolt catch',
                'Move bolt forward until it engages bolt catch. Return the charging handle to the forward position',
                'Ensure the receiver and chamber are free of ammo',
                'Place the weapon on SAFE (if not already)',
                'Press the upper portion of the bolt catch to allow the bolt to go forward',
                'Close the ejection port cover'
              ]
            }
          ],
          performanceMeasures: [
            'Clear the weapon',
            'Load the weapon',
            'Engage the target',
            'Perform immediate action',
            'Clear the weapon'
          ]
        },
        {
          id: 'w3-m249',
          title: 'M249 SAW',
          timeStandard: '3 min disassemble / 3 min assemble',
          taskBasis: '071-COM-4025, 071-COM-4026',
          conditions: 'You are a member of a team that has just returned from a mission and you have been directed to conduct maintenance on your M249 Machine Gun.',
          standards: 'Correctly clear and completely disassemble the M249, matching the groups with the correct nomenclature within three minutes. Correctly assemble and perform a function check within three minutes.',
          steps: [
            {
              title: 'Clear the weapon',
              substeps: [
                'Point weapon in a safe direction. Ensure safety is on FIRE before moving bolt/operating rod assembly',
                'Pull and hold cocking handle with right hand palm up to rear, ensuring bolt locks completely to rear',
                'While holding the cocking handle to the rear with right hand palm up with no tension on the bolt, place the safety to SAFE',
                'Push the cocking handle assembly to the fully forward and locked position',
                'Push in the feed cover latches, look in a safe direction, raise the feed cover, and conduct a five-point safety check'
              ]
            },
            {
              title: 'Five-point safety check',
              substeps: [
                'Check the feed pawl assembly under the cover',
                'Check the feed tray. Lift the feed tray and inspect the chamber',
                'Check the space between the face of the bolt and the chamber',
                'Check the space under the bolt/operating rod assembly',
                'Check the magazine well'
              ]
            },
            {
              title: 'Disassemble into groups',
              substeps: [
                'Driving spring mechanism rod',
                'Spring',
                'Trigger mechanism',
                'Bolt carrier',
                'Bolt',
                'Gas operating rod',
                'Hand guard',
                'Heat shield',
                'Bipod legs',
                'Barrel',
                'Gas regulator',
                'Gas regulator collar',
                'Gas tube',
                'Receiver with feed tray and feed tray cover assembly'
              ]
            },
            {
              title: 'Perform a functions check',
              substeps: [
                'Ensure the safety is on FIRE before moving the bolt/operating rod assembly',
                'Pull and hold cocking handle with right hand palm up to rear, ensuring bolt locks completely to rear',
                'While holding to rear with right hand palm up, with no tension on bolt, place on SAFE and depress trigger. Weapon should not fire',
                'While holding the cocking handle, place the safety to FIRE, and depress the trigger. Ease the bolt forward to close and lock. Release the trigger',
                'Attempt to place on SAFE; safety must not be able to be moved to SAFE. Close ejection port cover'
              ]
            }
          ],
          performanceMeasures: [
            'Clear the weapon',
            'Disassemble the weapon',
            'Assemble the weapon',
            'Perform functions check'
          ]
        },
        {
          id: 'w5-grenades',
          title: 'Hand Grenades',
          timeStandard: 'Per standards',
          taskBasis: '071-325-4407, 071-325-4401, 071-COM-0815',
          conditions: 'You are a member of a team conducting combat operations.',
          standards: 'Correctly identify types of hand grenades and employ them against troops in the open or through openings.',
          hasFlashcards: true,
          flashcards: [
            {
              id: 'frag',
              name: 'M67 Fragmentation',
              type: 'Lethal',
              color: 'Olive drab body with yellow markings',
              fuseDelay: '4-5 seconds',
              casualtyRadius: '15 meters',
              killRadius: '5 meters',
              weight: '14 oz'
            },
            {
              id: 'smoke',
              name: 'M18 Colored Smoke',
              type: 'Signaling',
              color: 'Cylinder body, color-coded cap (red, green, yellow, violet)',
              fuseDelay: '1-2 seconds',
              duration: '50-90 seconds',
              use: 'Signaling, screening, marking'
            },
            {
              id: 'stun',
              name: 'M84 Stun/Flash-Bang',
              type: 'Non-lethal',
              color: 'Black body',
              fuseDelay: '1-2 seconds',
              effect: '180 dB sound, 1 million candela flash',
              use: 'Room clearing, disorientation',
              safetyRadius: '5 feet minimum'
            },
            {
              id: 'incendiary',
              name: 'AN-M14 Incendiary (Thermite)',
              type: 'Incendiary',
              color: 'Gray body with purple markings',
              fuseDelay: '2 seconds',
              burnTime: '40 seconds',
              burnTemp: '4,000°F',
              use: 'Destroying equipment, starting fires'
            },
            {
              id: 'white-smoke',
              name: 'M34 White Phosphorus',
              type: 'Smoke/Incendiary',
              color: 'Light green body with yellow markings',
              fuseDelay: '4-5 seconds',
              use: 'Screening, incendiary, signaling',
              warning: 'Burns on contact with skin and continues burning'
            }
          ],
          steps: [
            {
              title: 'Identify Hand Grenades',
              substeps: [
                'Correctly identify fragmentation, stun, smoke, and incendiary grenades',
                'Know the characteristics, capabilities, and hazards of each type'
              ]
            },
            {
              title: 'Employ against troops in the open',
              substeps: [
                'Observe the target and select the appropriate grenade',
                'Grip the grenade with the throwing hand',
                'Remove the safety clip if present',
                'Pull the pin with a twisting motion',
                'Throw the grenade using the overhand method',
                'Take cover immediately after throwing'
              ]
            },
            {
              title: 'Employ through a window, door, or bunker',
              substeps: [
                'Position yourself to the side of the opening',
                'Prepare the grenade for throwing',
                'Announce "FRAG OUT" (or appropriate type)',
                'Throw the grenade through the opening',
                'Take cover and wait for detonation',
                'Enter and clear after detonation'
              ]
            }
          ],
          performanceMeasures: [
            'Identify hand grenades',
            'Employ grenades against troops in the open',
            'Employ grenades through openings'
          ]
        }
      ]
    },
    {
      id: 'medical',
      title: 'Medical / TC3',
      icon: 'medical',
      accentColor: '#3fb950',
      tasks: [
        {
          id: 'm1-medevac',
          title: 'Request MEDEVAC',
          timeStandard: 'Lines 1-5 within ~25 sec, Lines 6-9 within ~1 min',
          taskBasis: '081-COM-0101',
          conditions: 'You have a casualty requiring medical evacuation.',
          standards: 'Correctly transmit a 9-line MEDEVAC request using proper format and procedures. Use proper brevity codes, RT procedures, and pronunciation.',
          noGoCriteria: 'Candidate cannot send Lines 1-9 within the standard, uses wrong brevity codes, or transmits out of sequence/procedure.',
          hasLearnTestMode: true,
          learnContent: {
            purpose: 'A 9-Line MEDEVAC rapidly requests medical evacuation and communicates pickup details, patient status, and site conditions.',
            callFlow: [
              'Prep: Build Lines 1-9 from TCCC cards.',
              'Initial Contact: "[Higher], this is [Your Call Sign], 9-Line to follow, over."',
              'Send Lines 1-5, then state "Over."',
              'Send Lines 6-9 after acknowledgment.',
              'Close: "Over."'
            ],
            format: [
              {
                line: 1,
                name: 'Pickup Location (MGRS)',
                description: '6-digit grid (MINIMUM) with GZD, accurate ≤200m',
                example: 'Grid 16T EG 1234 5678'
              },
              {
                line: 2,
                name: 'Radio Freq, Call Sign & Suffix',
                description: 'Operational frequency for follow-on; include call sign/suffix',
                example: 'Call sign VIKING 2-1, Freq 38900'
              },
              {
                line: 3,
                name: 'Patients by Precedence',
                description: 'State number per category; say "Break" between',
                codes: [
                  'A # — Urgent',
                  'B # — Urgent-Surgical',
                  'C # — Priority',
                  'D # — Routine',
                  'E # — Convenience'
                ],
                example: '2A, Break, 1C'
              },
              {
                line: 4,
                name: 'Special Equipment Required',
                codes: [
                  'A — None',
                  'B — Hoist',
                  'C — Extrication equipment',
                  'D — Ventilator'
                ],
                example: 'A'
              },
              {
                line: 5,
                name: 'Patients by Type',
                description: 'Say "Break" between',
                codes: [
                  'L # — Litter',
                  'A # — Ambulatory'
                ],
                example: '1L, Break, 2A'
              },
              {
                line: 6,
                name: 'Security at Pickup Site',
                codes: [
                  'N — No enemy in area',
                  'P — Possible enemy in area',
                  'E — Enemy in area',
                  'X — Enemy in area (armed escort required)'
                ],
                example: 'P'
              },
              {
                line: 7,
                name: 'Marking Method',
                codes: [
                  'A — Panels',
                  'B — Pyrotechnic signal',
                  'C — Smoke',
                  'D — None',
                  'E — Other'
                ],
                example: 'C (Green)'
              },
              {
                line: 8,
                name: 'Patient Nationality & Status',
                codes: [
                  'A — U.S. military',
                  'B — U.S. civilian',
                  'C — Non-U.S. military',
                  'D — Non-U.S. civilian',
                  'E — Enemy POW'
                ],
                example: '2A, 1D'
              },
              {
                line: 9,
                name: 'Terrain / NBC',
                description: 'Terrain description (slope, obstacles, LZ hazards, approach)',
                example: 'Flat 100×100 meter dirt lot; wires on west edge; best approach from east'
              }
            ],
            tips: [
              'Build Lines 1-5 first from map/TCCC cards; rehearse brevity codes out loud.',
              'For Lines 3 & 5, say numbers first (e.g., "2A, Break, 1C").',
              'Line 6: give the single-letter code; don\'t narrate the threat picture unless asked.',
              'Line 7: state method and color if smoke/pyro is used (e.g., "C, green").',
              'Line 9: keep it LZ-useful (size, slope, obstacles, wires, approach).',
              'Speak once, clearly; use pro-words; avoid filler.'
            ],
            commonErrors: [
              'Missing GZD / bad grid (Line 1): Re-center protractor; sanity-check with terrain.',
              'Wrong order/omissions: Keep a laminated 9-blank-line pad; tick each line as you send it.',
              'Mixing narrative into coded lines: Codes only unless amplifying guidance is requested.',
              'Forgetting to state "Break" where required (Lines 3 & 5).'
            ]
          },
          testScenarios: [
            {
              id: 'lane1',
              title: 'Lane 1 — IED Blast, Two WIA',
              situation: 'Convoy struck by a small IED near a dry creek bed. One Soldier with shrapnel wounds to thigh (controlled bleeding), another with suspected concussion (dazed, vomiting). No contact observed, but locals are gathering. Terrain is flat, dusty lot with light poles and low wires to the west; solid approach from the east. You have green smoke and a panel available.',
              yourCallSign: 'VIKING 2-1',
              yourFreq: '38900',
              answer: {
                line1: '16T EG 123 456; north end dry creek bed',
                line2: 'VIKING 2-1, 38900',
                line3: '1A, Break, 1C',
                line4: 'A',
                line5: '1L, Break, 1A',
                line6: 'P',
                line7: 'C (Green)',
                line8: '2A',
                line9: 'Flat 50×50 m, wires west, approach east'
              }
            },
            {
              id: 'lane2',
              title: 'Lane 2 — Heat Casualty, Ambulatory',
              situation: 'During a ruck, one Soldier collapses from heat stress but recovers after cooling and fluids; ambulatory with assistance. No enemy indicators. Open field LZ 60×60 m, slight slope south-to-north, no wires. You can mark with orange panel; pyro not authorized.',
              yourCallSign: 'VIKING 2-1',
              yourFreq: '38900',
              answer: {
                line1: '16T EG 118 563',
                line2: 'VIKING 2-1, 38900',
                line3: '1D',
                line4: 'A',
                line5: '1A',
                line6: 'N',
                line7: 'A (Panel)',
                line8: '1A',
                line9: '60×60 m, slight slope S→N, no wires'
              }
            },
            {
              id: 'lane3',
              title: 'Lane 3 — Complex Terrain, Hoist Required',
              situation: 'Patrol in steep ravine; one Soldier suffers ankle fracture (litter) and another mild laceration (ambulatory). Movement to ridge is unsafe without hoist. Unknown enemy presence; earlier reports of sporadic small arms 5 km north. Best mark is purple smoke; tree canopy near LZ and boulders along approach.',
              yourCallSign: 'VIKING 2-1',
              yourFreq: '38900',
              answer: {
                line1: '16T EG 110 531',
                line2: 'VIKING 2-1, 38900',
                line3: '1B, Break, 1C',
                line4: 'B (Hoist)',
                line5: '1L, Break, 1A',
                line6: 'P',
                line7: 'C (Purple)',
                line8: '2A',
                line9: 'Steep slopes; trees; boulders near LZ; approach from ridgeline east'
              }
            },
            {
              id: 'lane4',
              title: 'Lane 4 — Contact Likely, Armed Escort',
              situation: 'Following a TIC 30 minutes ago, one casualty with penetrating chest trauma (urgent-surgical) and one with arm fracture (priority). Enemy scouts reported in vicinity; armed escort recommended. LZ is a hard-packed road segment, 40×70 m, berms on both sides; wires cross 30 m west of midpoint. Red pyro available.',
              yourCallSign: 'VIKING 2-1',
              yourFreq: '38900',
              answer: {
                line1: '16T EG 160 540',
                line2: 'VIKING 2-1, 38900',
                line3: '1B, Break, 1C',
                line4: 'A',
                line5: '1L, Break, 1A',
                line6: 'X (Armed escort required)',
                line7: 'B (Red pyro)',
                line8: '2A',
                line9: '40×70 m hard-pack; berms both sides; wires 30 m W; best approach S→N'
              }
            },
            {
              id: 'lane5',
              title: 'Lane 5 — Urban Courtyard',
              situation: 'Partnered patrol in urban district; non-U.S. civilian vendor struck by debris, bleeding from scalp (priority). No active threat; crowd compliant. Courtyard 50×50 m with trees on north edge; best approach from south; able to throw green smoke over wall on call.',
              yourCallSign: 'VIKING 2-1',
              yourFreq: '38900',
              answer: {
                line1: '16T EG 155 557',
                line2: 'VIKING 2-1, 38900',
                line3: '1C',
                line4: 'A',
                line5: '1A',
                line6: 'N',
                line7: 'C (Green)',
                line8: '1D',
                line9: '50×50 m with trees north; approach from south'
              }
            }
          ],
          steps: [
            {
              title: '9-Line MEDEVAC Format',
              substeps: [
                'Line 1: Location (8-digit grid)',
                'Line 2: Radio frequency and call sign',
                'Line 3: Number of patients by precedence (A-Urgent, B-Priority, C-Routine)',
                'Line 4: Special equipment required (A-None, B-Hoist, C-Extraction, D-Ventilator)',
                'Line 5: Number of patients by type (L-Litter, A-Ambulatory)',
                'Line 6: Security of pickup site (N-No enemy, P-Possible, E-Enemy, X-Hot)',
                'Line 7: Method of marking (A-Panels, B-Pyro, C-Smoke, D-None, E-Other)',
                'Line 8: Patient nationality and status',
                'Line 9: CBRN contamination (if applicable)'
              ]
            }
          ],
          performanceMeasures: [
            'Correctly format 9-line request',
            'Transmit request clearly',
            'Provide accurate location'
          ]
        },
        {
          id: 'm2-care-under-fire',
          title: 'Care Under Fire',
          timeStandard: 'Per standards',
          taskBasis: '081-COM-1001',
          conditions: 'You are under direct fire and have a casualty.',
          standards: 'Provide care under fire and move the casualty to cover.',
          steps: [
            {
              title: 'Care Under Fire',
              substeps: [
                'Return fire and take cover',
                'Direct the casualty to return fire if able',
                'Direct the casualty to move to cover if able',
                'If the casualty is unable to move, tactically move to the casualty',
                'Apply a tourniquet to life-threatening hemorrhage',
                'Move the casualty to cover using appropriate carry/drag'
              ]
            },
            {
              title: 'Casualty Movement Techniques',
              substeps: [
                'Fireman\'s carry',
                'Two-man carry',
                'Poncho litter carry',
                'Fore and aft carry',
                'SKEDCO extraction'
              ]
            }
          ],
          performanceMeasures: [
            'Engage the threat',
            'Control life-threatening bleeding',
            'Move casualty to cover'
          ]
        },
        {
          id: 'm5-bleeding',
          title: 'Control Bleeding',
          timeStandard: 'Per standards',
          taskBasis: '081-COM-1003',
          conditions: 'You have a casualty with bleeding.',
          standards: 'Control bleeding using appropriate techniques.',
          steps: [
            {
              title: 'Tourniquet Application (Extremity)',
              substeps: [
                'Apply tourniquet HIGH and TIGHT on the extremity',
                'Route band through buckle and pull tight',
                'Twist windlass until bleeding stops',
                'Lock windlass in place',
                'Mark time of application on tourniquet',
                'Do NOT remove tourniquet in the field'
              ]
            },
            {
              title: 'Wound Packing',
              substeps: [
                'Expose the wound',
                'Pack hemostatic gauze directly into wound',
                'Pack tightly to fill the wound cavity',
                'Apply direct pressure for minimum 3 minutes',
                'Apply pressure dressing'
              ]
            },
            {
              title: 'Junctional Hemorrhage',
              substeps: [
                'Identify junctional areas (groin, axilla, neck)',
                'Apply Combat Ready Clamp (CRoC) or similar',
                'Pack wound with hemostatic gauze',
                'Apply pressure dressing'
              ]
            }
          ],
          performanceMeasures: [
            'Control extremity hemorrhage with tourniquet',
            'Pack wounds appropriately',
            'Control junctional hemorrhage'
          ]
        },
        {
          id: 'm7-chest-injury',
          title: 'Chest Injuries / NCD',
          timeStandard: 'Per standards',
          taskBasis: '081-COM-1007',
          conditions: 'You have a casualty with a penetrating chest wound.',
          standards: 'Apply an occlusive dressing and perform needle chest decompression if indicated.',
          steps: [
            {
              title: 'Apply Chest Seal',
              substeps: [
                'Expose the wound',
                'Wipe away excess blood/moisture',
                'Apply vented chest seal over wound',
                'Ensure seal is airtight',
                'Check for exit wound and seal if present'
              ]
            },
            {
              title: 'Needle Chest Decompression (NCD)',
              substeps: [
                'Identify signs of tension pneumothorax (increasing respiratory distress, decreased breath sounds, tracheal deviation)',
                'Locate insertion site: 2nd intercostal space, midclavicular line',
                'Clean site if possible',
                'Insert 14g needle at 90 degrees to chest wall',
                'Insert over the top of the rib (avoid vessels)',
                'Listen for rush of air',
                'Leave catheter in place, remove needle',
                'Secure catheter with tape'
              ]
            }
          ],
          performanceMeasures: [
            'Apply chest seal correctly',
            'Identify tension pneumothorax',
            'Perform NCD correctly'
          ]
        }
      ]
    },
    {
      id: 'patrol',
      title: 'Patrol',
      icon: 'radio',
      accentColor: '#d29922',
      tasks: [
        {
          id: 'p1-cff',
          title: 'Call For Fire',
          timeStandard: 'Per standards',
          taskBasis: '061-COM-1001',
          conditions: 'You have observed enemy activity and need to request indirect fire support.',
          standards: 'Correctly transmit a call for fire using three transmissions, adjust to Fire-for-Effect (FFE), and report effects.',
          noGoCriteria: 'Candidate does not bracket correctly during adjustment.',
          hasLearnTestMode: true,
          learnContent: {
            purpose: 'Call for Fire (CFF) is how you request and adjust indirect fire support (mortars, artillery) on enemy targets. You communicate with the Fire Direction Center (FDC) using a structured three-transmission format, then adjust rounds onto target using bracketing techniques.',
            overview: [
              '1. YOU observe enemy and calculate target location',
              '2. YOU contact FDC with three transmissions',
              '3. FDC fires adjustment round and sends "SHOT OVER"',
              '4. YOU respond with "SHOT OUT", spot where it lands, and send corrections',
              '5. Repeat until on target → call "FIRE FOR EFFECT"',
              '6. Report results → "END OF MISSION"'
            ],
            preparation: [
              'Plot your current position grid (8-digit MGRS with Grid Zone Designator)',
              'Plot or estimate enemy position grid OR distance/direction from you',
              'Calculate direction to target in mils (1 mil = ~1 meter at 1000m)',
              'Have your CFF laminated card ready to reference'
            ],
            transmissionDetails: {
              first: {
                title: '1st Transmission — Observer ID & Warning Order',
                elements: [
                  'Call FDC: "FDC, THIS IS [your call sign]..."',
                  'Warning Order tells FDC what type of mission:',
                  'GRID: do not say "Grid" after adjust fire. Grid is already implied.',
                  'POLAR: Add "POLAR" if using direction/distance instead of grid'
                ],
                gridExample: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                polarExample: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, POLAR, OVER."'
              },
              second: {
                title: '2nd Transmission — Target Location',
                elements: [
                  'GRID MISSION: Give 8-digit grid with Grid Zone Designator',
                  'Format: "GRID [GZD] [8-digit], DIRECTION [mils], OVER"',
                  'Must be accurate within 250 meters',
                  'POLAR MISSION: Give distance and direction FROM YOUR POSITION',
                  'Format: "DIRECTION [mils], DISTANCE [meters], OVER"',
                  'FDC calculates target location from your known position'
                ],
                gridExample: '"GRID 16T EG 1234 5678, DIRECTION 1680, OVER."',
                polarExample: '"DIRECTION 1600, DISTANCE 1200, OVER."'
              },
              third: {
                title: '3rd Transmission — Target Description & Method',
                elements: [
                  'TARGET DESCRIPTION: What you see (# and type of enemy)',
                  '• "INFANTRY SQUAD IN THE OPEN"',
                  '• "TWO TRUCKS WITH DISMOUNTS"',
                  '• "MORTAR POSITION IN TREES"',
                  'DANGER CLOSE: Add if friendlies within 600m of target!',
                  'METHOD OF ENGAGEMENT (optional):',
                  '• HE/QUICK = High Explosive with quick fuze (default)',
                  '• WP = White Phosphorus (smoke/incendiary)',
                  'METHOD OF FIRE & CONTROL:',
                  '• AT MY COMMAND = You control when they fire',
                  '• FIRE WHEN READY = FDC fires when ready (faster)'
                ],
                example: '"INFANTRY SQUAD IN THE OPEN, HE/QUICK, AT MY COMMAND, OVER."'
              }
            },
            messageToObserver: 'After your 3 transmissions, FDC responds with Message To Observer (MTO). They tell you: Unit(s) firing, # of rounds, and TARGET NUMBER. WRITE THE TARGET NUMBER DOWN — you need it for adjustments and EOM!',
            mtoExample: '"MESSAGE TO OBSERVER: 2 GUNS, 1 IN ADJUST, 2 IN EFFECT, TARGET AB1006, OVER."',
            adjustFire: {
              explanation: 'After each round impacts, you "spot" where it landed relative to target, then send corrections. Goal: Bracket the target (get one round short AND one round over) then split the bracket until on target.',
              spotting: 'Look where round lands. Report: LEFT/RIGHT (deviation) and OVER/SHORT (range).',
              spottingExample: 'Round lands 50 mils left and 300m short of target.',
              correctionFormat: '"[LEFT/RIGHT] [mils], [ADD/DROP] [meters], OVER."',
              correctionExample: '"RIGHT 50, ADD 400, OVER."',
              bracketGuide: [
                '> 400 m off → Add/Drop 800 m (start wide bracket)',
                '> 200 and < 400 m → Add/Drop 400 m',
                '> 100 and < 200 m → Add/Drop 200 m',
                '< 100 m → Add/Drop 100 m',
                'Split 100m bracket → Add/Drop 50 m → call FFE'
              ],
              keyRule: '⚠️ Each correction must create OPPOSITE range spotting (if first was SHORT, correction must result in OVER). This is "successive bracketing" — failure to bracket is a NO-GO.',
              shotProcedure: [
                'FDC: "SHOT OVER." (round fired)',
                'You: "SHOT OUT." (acknowledge)',
                'FDC: "SPLASH OVER." (impact in 5 sec)',
                'You: "SPLASH OUT." (you\'re watching)',
                '*Round impacts — spot it*',
                'You: "[correction], OVER."'
              ]
            },
            fireForEffect: 'Call "FIRE FOR EFFECT, OVER" when: (1) You split a 100-meter bracket, OR (2) You get a range-correct spotting (round is on line with target in range).',
            endOfMission: 'After FFE rounds impact, report results: "END OF MISSION, TARGET [number], [effect], OVER."',
            effectsOptions: [
              'TARGET DESTROYED — target eliminated',
              'TARGET NEUTRALIZED — target rendered ineffective',
              'TARGET SUPPRESSED — target temporarily unable to fight',
              'AREA COVERAGE COMPLETE — rounds hit intended area'
            ],
            dangerClose: {
              definition: 'DANGER CLOSE warns FDC that friendly forces are near the target. Required when target is within 600m (mortars/artillery) or 750m (naval guns) of friendlies.',
              distances: [
                { weapon: '60mm Mortar', distance: '600m' },
                { weapon: '81mm/120mm Mortar', distance: '600m' },
                { weapon: '105mm/155mm Artillery', distance: '600m' },
                { weapon: 'Naval Gunfire (5")', distance: '750m' }
              ],
              procedure: [
                'Add "DANGER CLOSE" in 3rd transmission after target description',
                'Example: "INFANTRY SQUAD IN THE OPEN, DANGER CLOSE, HE/QUICK, AT MY COMMAND, OVER."',
                'FDC will take extra precautions (reduced charge, careful calculations)'
              ],
              warnings: [
                '⚠️ DANGER CLOSE is NOT optional — failure can kill friendlies',
                '⚠️ Know YOUR position accurately before calling fires',
                '⚠️ Maintain communication with adjacent units during mission'
              ]
            },
            commonErrors: [
              'Not bracketing (NO-GO) — must force opposite range spotting each correction',
              'Saying UP/DOWN instead of ADD/DROP',
              'Forgetting to write down TARGET NUMBER from MTO',
              'Not announcing DANGER CLOSE when required',
              'Giving corrections in mils for range (must be meters)'
            ],
            pocketCard: [
              '=== THREE TRANSMISSIONS ===',
              '1. "[FDC], THIS IS [call sign], ADJUST FIRE, OVER."',
              '2. "GRID [GZD] [8-digit], DIRECTION [mils], OVER."',
              '3. "[Target], [DANGER CLOSE], [method], OVER."',
              '=== ADJUSTMENT ===',
              'Bracket: >400→±800 | >200→±400 | >100→±200 | <100→±100 | ±50→FFE',
              '"[L/R mils], [ADD/DROP meters], OVER."',
              '=== WRAP UP ===',
              '"FIRE FOR EFFECT, OVER."',
              '"EOM, TARGET #____, [effect], OVER."'
            ]
          },
          testScenarios: [
            {
              id: 'lane1',
              title: 'Lane 1 — Squad in the Open Near Ridgeline',
              situation: 'From OP VIKING 2-1 you observe an enemy squad moving in the open along a ridgeline saddle. You have clear LOS, map, compass, and binoculars. Estimated range ~2100 m, direction 1300 MILLS.',
              yourCallSign: 'VIKING 2-1',
              answer: {
                first: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                second: '"GRID 16T EG 1123 4578, OVER."',
                third: '"INFANTRY SQUAD IN THE OPEN, HE/QUICK, AT MY COMMAND, OVER."',
                mto: 'TARGET #AB1010',
                direction: '"DIRECTION 1680, OVER."',
                adjustments: 'L 50, S 250 → RIGHT 100, ADD 400 → R 10, O 300 → LEFT 20, DROP 200 → On line, S 120 → ADD 100 → Range correct → FFE',
                eom: 'EOM, TARGET #AB1010, TARGET NEUTRALIZED, OVER'
              }
            },
            {
              id: 'lane2',
              title: 'Lane 2 — Trucks at T-Intersection',
              situation: 'Two light trucks halted at a rural T-intersection; dismounts pulling security. Terrain is flat farmland, sparse cover. ENEMY GRID: 16S EG 5492 1239, Direction: 1390 MILLS.',
              yourCallSign: 'VIKING 2-1',
              answer: {
                first: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                second: '"GRID 16T EG 1290 5325, OVER."',
                third: '"TWO LIGHT TRUCKS WITH DISMOUNTS, HE/QUICK, AT MY COMMAND, OVER."',
                mto: 'TARGET #AB1011',
                direction: '"DIRECTION 1420, OVER."',
                adjustments: 'R 30, O 250 → LEFT 50, DROP 400 → L 10, S 180 → RIGHT 20, ADD 200 → On line, S 80 → ADD 100, FFE',
                eom: 'EOM, TARGET #AB1011, TARGET SUPPRESSED, OVER'
              }
            },
            {
              id: 'lane3',
              title: 'Lane 3 — Mortar Pit Behind Tree Line',
              situation: 'Muzzle flashes observed from a suspected mortar position behind a tree line. Intermittent smoke; crew movement visible. Estimated range ~2600 m. Direction: 600 MILLS.',
              yourCallSign: 'VIKING 2-1',
              answer: {
                first: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                second: '"GRID 16T EG 1018 5482, OVER."',
                third: '"MORTAR POSITION IN TREES, HE/QUICK, AT MY COMMAND, OVER."',
                mto: 'TARGET #AB1012',
                direction: '"DIRECTION 1760, OVER."',
                adjustments: 'L 60, S 500 → RIGHT 180, ADD 800 → R 20, O 300 → LEFT 60, DROP 400 → On line, S 150 → ADD 200 → Range correct → FFE',
                eom: 'EOM, TARGET #AB1012, TARGET NEUTRALIZED, OVER'
              }
            },
            {
              id: 'lane4',
              title: 'Lane 4 — Dismounted Patrol Crossing Ford',
              situation: 'Ten enemy dismounts moving in file to a shallow river ford; brief halt at near bank. Vegetation low; riverbanks open. Estimated range ~500 m. Direction: 1500 MILLS.',
              yourCallSign: 'VIKING 2-1',
              answer: {
                first: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                second: '"GRID 16T EG 1376 5199, OVER."',
                third: '"DISMOUNTED SQUAD AT FORD, HE/QUICK, AT MY COMMAND, OVER."',
                mto: 'TARGET #AB1013',
                direction: '"DIRECTION 1200, OVER."',
                adjustments: 'R 20, S 120 → ADD 200 → On line, O 150 → DROP 200 → Range correct → FFE',
                eom: 'EOM, TARGET #AB1013, TARGET SUPPRESSED, OVER'
              }
            },
            {
              id: 'lane5',
              title: 'Lane 5 — Technical Vehicle in Orchard',
              situation: 'A pickup ("technical") with mounted MG idling along an orchard lane; two personnel nearby. Partial foliage; limited crosswind. ENEMY GRID: 16S EG 3426 2356. Direction: 10 MILLS.',
              yourCallSign: 'VIKING 2-1',
              answer: {
                first: '"FDC, THIS IS VIKING 2-1, ADJUST FIRE, OVER."',
                second: '"GRID 16T EG 1452 5055, OVER."',
                third: '"TECHNICAL VEHICLE WITH CREW, HE/QUICK, AT MY COMMAND, OVER."',
                mto: 'TARGET #AB1014',
                direction: '"DIRECTION 1580, OVER."',
                adjustments: 'L 40, O 220 → RIGHT 100, DROP 400 → R 10, S 150 → ADD 200 → On line, S 60 → ADD 100, FFE',
                eom: 'EOM, TARGET #AB1014, TARGET NEUTRALIZED, OVER'
              }
            }
          ],
          steps: [
            {
              title: 'Call For Fire Format',
              substeps: [
                'Observer Identification (your call sign)',
                'Warning Order ("Fire Mission")',
                'Target Location (grid, polar, or shift)',
                'Target Description (what you see)',
                'Method of Engagement (type of fire)',
                'Method of Fire and Control'
              ]
            },
            {
              title: 'Adjust Fire',
              substeps: [
                'Observe impact of rounds',
                'Determine deviation (left/right) and range (add/drop)',
                'Send correction to FDC',
                'Continue adjustments until rounds on target',
                'Call "Fire for Effect" when on target',
                'End mission when complete'
              ]
            }
          ],
          performanceMeasures: [
            'Transmit proper call for fire',
            'Adjust fire accurately',
            'End mission properly'
          ]
        },
        {
          id: 'p3-radio',
          title: 'ASIP Radio Operations',
          timeStandard: 'Per standards',
          taskBasis: '113-COM-1011',
          conditions: 'You have an ASIP radio (AN/PRC-119 series) and need to establish communications.',
          standards: 'Correctly assemble, program, operate, and disassemble the ASIP radio.',
          hasLearnTestMode: true,
          learnContent: {
            equipment: [
              'Radio body',
              'Battery',
              'Antenna (whip)',
              'Handset/Mic'
            ],
            batteryCheck: 'Use the notch/indicator on the battery to gauge remaining charge. Even if it reads 14-20 hours, request/bring spares so comms don\'t die during operation.',
            steps: [
              {
                title: '1) Install the Battery',
                substeps: [
                  'Lift the battery latch; twist to free; open the battery door.',
                  'Align the small battery plug with the matching receptacle and fully seat it.',
                  'Re-seat the battery pack: hook the far side first, ensure it pops in and sits flat. Do not force it.',
                  'Press the door down, rotate the latch toward the open area until you feel resistance, then lock.',
                  'Quick check: With a good seat, the door resists upward pressure and the latch holds without wobble.'
                ]
              },
              {
                title: '2) Attach Antenna and Handset',
                substeps: [
                  'Antenna: Place the antenna base squarely on the antenna port. Thread/screw until snug—no wobble.',
                  'Handset: Open the audio port cover. Align handset connector; press straight down to fully seat the gasket.',
                  'Rotate counter-clockwise until it locks. Tug test: lift gently—the connector should not pop off.',
                  'RTO tip: Verify antenna and mic are tight. Tape strain-relief on cable/antenna to prevent flopping/snags.'
                ]
              },
              {
                title: '3) Power Up and Enter LOAD Mode',
                substeps: [
                  'From OFF, rotate the function knob to LD (LOAD).',
                  'Wait for the display (e.g., WAIT, then NO KEY). Use MENU/CLEAR to scroll.'
                ]
              },
              {
                title: '4) Basic Settings (Plaintext, Single-Channel)',
                substeps: [
                  'Use MENU/CLEAR to cycle, number keys to set values, CHANGE where applicable.',
                  'VOL: Press a number 1-9 to set volume (you\'ll hear a beep).',
                  'CHAN: Set Channel.',
                  'PWR: Press CHANGE → 7 to set HIGH if needed; otherwise leave LOW.',
                  'MODE: Set to Single Channel (not Frequency Hop).',
                  'COMSEC: Set to PT (Plain Text).',
                  'You should hear tone/ringing stop once you\'re on the correct net in PT.'
                ]
              },
              {
                title: '5) Enter the Operating Frequency',
                substeps: [
                  'Press FREQ.',
                  'Press MENU/CLEAR to ready the entry.',
                  'Enter the 5-digit frequency (keyed as 50000).',
                  'Press STO (STORE) to save.',
                  'Verify your earlier settings: PWR, MODE = SC, CHAN = 1, COMSEC = PT.'
                ]
              },
              {
                title: '6) Place the Radio ON and Check',
                substeps: [
                  'Rotate from LD to ON.',
                  'Use SQ (squelch) as needed and perform a quick radio check on the assigned net.',
                  'If no audio/handset issues: Re-seat the audio connector (press straight down, lock), confirm antenna tight, confirm PT / SC and correct frequency.'
                ]
              },
              {
                title: '7) Disassembly (Reverse Order)',
                substeps: [
                  'Rotate from ON to Z (to clear), then to OFF.',
                  'Remove handset: unlock and pull straight off; close audio port cover.',
                  'Remove antenna; stow safely (tape if needed).',
                  'Remove battery: lift latch, rotate, lift door, disconnect plug; re-install door so nothing is lost.',
                  'Goal: Don\'t lose components. Turn-in with radio, antenna, mic, and battery accounted for.'
                ]
              }
            ],
            troubleshooting: [
              'Mic pops off: It wasn\'t locked—seat fully, then rotate to lock; tug test.',
              'No RX/TX in PT: Verify MODE = Single Channel, COMSEC = PT, CHAN = 1, correct FREQ stored.',
              'Weak/No power: Swap battery; ensure latch is locked and door is flush.',
              'Floppy antenna/cable: Tighten and consider tape for movement.'
            ],
            pocketCard: [
              '1 Battery: plug → seat → latch lock',
              '2 Antenna: seat → thread snug',
              '3 Handset: seat → rotate to lock (tug test)',
              '4 LD (LOAD): wait for display',
              '5 Settings: VOL → CH1 → PWR (L/H) → MODE SC → COMSEC PT',
              '6 FREQ: FREQ → MENU/CLEAR → 5 digits → STO',
              '7 ON: SQ as needed → Radio check',
              '8 Shutdown: ON→Z→OFF → remove mic/ant/battery → stow'
            ]
          },
          steps: [
            {
              title: 'Radio Setup',
              substeps: [
                'Install battery correctly',
                'Attach antenna',
                'Attach handset/mic',
                'Turn on radio to LOAD mode',
                'Set VOL, CHAN, PWR, MODE, COMSEC',
                'Enter frequency and STORE',
                'Turn to ON and perform radio check'
              ]
            },
            {
              title: 'Radio Procedures',
              substeps: [
                'Use proper call signs',
                'Keep transmissions brief and clear',
                'Use phonetic alphabet for clarity',
                'Use prowords correctly (OVER, OUT, ROGER, etc.)',
                'Practice good antenna positioning'
              ]
            }
          ],
          performanceMeasures: [
            'Assemble radio correctly',
            'Program radio with correct settings',
            'Transmit and receive messages',
            'Disassemble and account for components'
          ]
        },
        {
          id: 'p10-spot',
          title: 'SPOT Report',
          timeStandard: 'Per standards',
          taskBasis: '071-326-0510',
          conditions: 'You have observed enemy activity and need to report.',
          standards: 'Correctly transmit a SPOT report using SALUTE format.',
          steps: [
            {
              title: 'SALUTE Format',
              substeps: [
                'S - Size: How many personnel/vehicles',
                'A - Activity: What are they doing',
                'L - Location: Where are they (8-digit grid)',
                'U - Unit: Identifiers, uniforms, markings',
                'T - Time: When observed (DTG)',
                'E - Equipment: Weapons, vehicles, gear'
              ]
            }
          ],
          performanceMeasures: [
            'Report all SALUTE elements',
            'Transmit clearly and accurately',
            'Provide accurate location'
          ]
        },
        {
          id: 'p6-cbrn',
          title: 'CBRN Operations',
          timeStandard: '9 minutes (mask)',
          taskBasis: '031-COM-1013',
          conditions: 'You are operating in a CBRN environment.',
          standards: 'Don protective mask within 9 minutes and perform MOPP level changes.',
          steps: [
            {
              title: 'Don Protective Mask',
              substeps: [
                'Stop breathing and close eyes',
                'Remove helmet and put between knees',
                'Remove mask from carrier',
                'Grasp mask, insert chin first',
                'Pull straps over head and tighten',
                'Clear mask (exhale sharply)',
                'Seal mask (cover outlet, exhale)',
                'Resume breathing',
                'Replace helmet'
              ]
            },
            {
              title: 'MOPP Levels',
              substeps: [
                'MOPP 0: Ensemble readily available',
                'MOPP 1: Overgarment worn, boots accessible',
                'MOPP 2: Overgarment and boots worn',
                'MOPP 3: Add mask and hood',
                'MOPP 4: Add gloves'
              ]
            }
          ],
          performanceMeasures: [
            'Don mask within 9 minutes',
            'Properly seal and clear mask',
            'Understand MOPP levels'
          ]
        }
      ]
    }
  ]
};

// Icons SVG paths
const ICONS = {
  weapon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M2 12h4l2-3h8l2 3h4M6 12v4l4 2 4-2 4 2v-4"/>
  </svg>`,
  medical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2v20M2 12h20"/>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
  </svg>`,
  radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="5" y="4" width="14" height="17" rx="2"/>
    <circle cx="12" cy="14" r="3"/>
    <line x1="8" y1="7" x2="16" y2="7"/>
  </svg>`
};
