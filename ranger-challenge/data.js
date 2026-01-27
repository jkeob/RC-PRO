// Ranger Challenge Training Data
// Based on EIB/ESB Handbook - 1/25 SBCT

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
          id: 'w1-m320',
          title: 'M320 Grenade Launcher',
          timeStandard: '20 seconds each',
          taskBasis: '071-031-0002, 071-031-0003',
          conditions: 'You are a member of a team conducting dismounted operations.',
          standards: 'Correctly clear, load, and fire the grenade launcher in 20 seconds. Correctly unload and clear the grenade launcher within 20 seconds. You must not drop the 40-mm ammunition.',
          steps: [
            {
              title: 'Clear, load, and fire',
              substeps: [
                'Point the weapon in a safe direction. Ensure weapon is on SAFE',
                'Press barrel release and pivot barrel out from receiver',
                'Make sure bore and chamber is clear of round or spent cartridge. Insert a single round of ammunition into barrel',
                'Ensure cartridge is seated fully forward in rear of barrel. Pivot barrel into receiver until barrel locking lever engages barrel (audible click)',
                'Place the weapon on fire',
                'Engage your target'
              ]
            },
            {
              title: 'Unload and clear an unfired round',
              substeps: [
                'Keep the weapon pointed in a safe direction, with trigger finger outside trigger guard',
                'Place the weapon on SAFE',
                'Press upward on barrel release lever and pivot barrel out from receiver',
                'Grasp rim of round. Pull rearward to remove round or cartridge case from the barrel',
                'Secure the round back in the appropriate pouch',
                'Pivot barrel into receiver until barrel release lever engages barrel',
                'Ensure weapon is still on SAFE'
              ]
            }
          ],
          performanceMeasures: [
            'Clear the weapon',
            'Load the weapon',
            'Engage the target',
            'Unload and clear an unfired round'
          ]
        },
        {
          id: 'w2-m18',
          title: 'M18 Pistol',
          timeStandard: '30s disassemble / 45s assemble',
          taskBasis: '071-004-0007, 071-004-0008',
          conditions: 'You are a member of a team that has just returned from a mission and you have been directed to conduct maintenance on your pistol.',
          standards: 'Correctly clear and disassemble the M17/M18 pistol, matching the parts with the correct nomenclature labels within 30 seconds. Correctly assemble and perform a function check within 45 seconds.',
          steps: [
            {
              title: 'Clear the weapon',
              substeps: [
                'Point the pistol in a safe direction for the duration of the event',
                'Place the safety lever in the safe (down) position',
                'Depress the magazine release and remove the magazine from the pistol',
                'Grasp the slide serrations and fully retract the slide',
                'Lock the slide to the rear using the slide stop',
                'Visually inspect the chamber, magazine well, and bolt face to ensure it is clear. Release the slide forward'
              ]
            },
            {
              title: 'Disassemble into components',
              substeps: [
                'Magazine',
                'Receiver',
                'Barrel',
                'Slide assembly',
                'Recoil spring guide assembly'
              ]
            },
            {
              title: 'Assemble the pistol',
              substeps: [
                'Grasp the slide with the bottom facing up',
                'Grasp the barrel assembly with the locking block facing up with the other hand',
                'Insert the muzzle into the forward end of the slide and simultaneously, lower the rear of the barrel assembly by moving the barrel slightly',
                'Insert the recoil spring guide into the recoil spring',
                'Insert the end of the recoil spring and guide into the recoil spring housing and compress until fully seated',
                'Push the firing pin block lever down',
                'Grasp the slide and barrel assembly with the sights up and align on receiver guide rails',
                'Push until the rear of the slide is beyond the rear of the receiver assembly and rotate the disassembly latch lever upward (click indicates positive lock)'
              ]
            },
            {
              title: 'Perform a functions check',
              substeps: [
                'Insert an empty magazine into magazine well. Ensure magazine catch engages',
                'Push up on manual safety lever to engage safety',
                'Grasp slide serrations and pull the slide to rear until it locks. Press the magazine catch. Magazine will fall free',
                'Press the slide catch to release the slide to the forward position',
                'Press the trigger. The striker should not be released',
                'Depress manual safety lever',
                'Press trigger and hold to rear. Striker should release (audible click)',
                'While still holding trigger to rear, fully retract and release slide',
                'Release trigger. A light audible click should be heard as striker resets',
                'Press trigger. Striker should release with loud audible click'
              ]
            }
          ],
          performanceMeasures: [
            'Clear the weapon',
            'Disassemble the weapon',
            'Assemble the weapon',
            'Perform a functions check'
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
          timeStandard: 'Per standards',
          taskBasis: '081-COM-0101',
          conditions: 'You have a casualty requiring medical evacuation.',
          standards: 'Correctly transmit a 9-line MEDEVAC request using proper format and procedures.',
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
      id: 'landnav',
      title: 'Land Navigation',
      icon: 'compass',
      accentColor: '#58a6ff',
      tasks: [
        {
          id: 'ln-day',
          title: 'Day Land Navigation',
          timeStandard: '3 hours / 3 of 4 points',
          taskBasis: 'Land Navigation',
          conditions: 'You will have a 1:50,000-scale military topographic map, lensatic compass, protractor, and writing instrument. Four 10-digit grids provided.',
          standards: 'Candidates have three hours to correctly locate three out of four of the navigation points on their lane, return to the end point, and report to the Graders.',
          steps: [
            {
              title: 'Course Specifications',
              substeps: [
                'Distance between points: 800-1000 meters (day)',
                'Total distance will not exceed 4500 meters (day)',
                'Points must be clearly visible within 10-meter radius',
                'Each point has unique navigation punch'
              ]
            },
            {
              title: 'Navigation Techniques',
              substeps: [
                'Plot all points on map before moving',
                'Determine best route to each point',
                'Use terrain association and dead reckoning',
                'Verify compass calibration at calibration site',
                'Track pace count between points'
              ]
            }
          ],
          performanceMeasures: [
            'Locate 3 of 4 points',
            'Complete within 3 hours',
            'Return to end point with map and scorecard'
          ]
        },
        {
          id: 'ln-night',
          title: 'Night Land Navigation',
          timeStandard: '3 hours / 3 of 4 points',
          taskBasis: 'Land Navigation',
          conditions: 'Same equipment as day navigation. Conducted after EENT and before sunrise.',
          standards: 'Candidates have three hours to correctly locate three out of four of the navigation points.',
          steps: [
            {
              title: 'Course Specifications',
              substeps: [
                'Distance between points: 600-800 meters (night)',
                'Total distance will not exceed 3500 meters (night)',
                'Points may be marked with single blue glow stick if conditions are poor'
              ]
            },
            {
              title: 'Night Navigation Techniques',
              substeps: [
                'Allow eyes to adjust to darkness (30+ minutes)',
                'Use red lens flashlight to preserve night vision',
                'Rely heavily on terrain association',
                'Use deliberate pace count',
                'Navigate to large terrain features first'
              ]
            }
          ],
          performanceMeasures: [
            'Locate 3 of 4 points',
            'Complete within 3 hours',
            'Return to end point'
          ]
        },
        {
          id: 'p8-resection',
          title: 'Resection & Map Reading',
          timeStandard: 'Per standards',
          taskBasis: '071-COM-1011, 071-COM-1012',
          conditions: 'You have a map, protractor, and compass. You need to determine your location.',
          standards: 'Correctly perform resection to determine your location and interpret map symbols.',
          steps: [
            {
              title: 'Perform Resection',
              substeps: [
                'Identify two or more known points on the terrain and map',
                'Orient your map using compass',
                'Shoot azimuth to first known point',
                'Convert to back azimuth (add/subtract 180°)',
                'Draw line from known point on map',
                'Repeat for second (and third) known point',
                'Your location is where lines intersect'
              ]
            },
            {
              title: 'Map Reading Skills',
              substeps: [
                'Identify terrain features (hill, valley, ridge, saddle, depression)',
                'Read contour lines and determine elevation',
                'Understand grid coordinate system',
                'Identify map symbols and colors',
                'Calculate distance using map scale'
              ]
            }
          ],
          performanceMeasures: [
            'Orient map correctly',
            'Perform resection accurately',
            'Identify terrain features'
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
          standards: 'Correctly transmit a call for fire using proper format.',
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
          id: 'p3-radio',
          title: 'Radio Operations',
          timeStandard: 'Per standards',
          taskBasis: '113-COM-1011',
          conditions: 'You have a tactical handheld radio and need to establish communications.',
          standards: 'Correctly operate the radio and transmit/receive messages.',
          steps: [
            {
              title: 'Radio Setup',
              substeps: [
                'Install battery correctly',
                'Attach antenna',
                'Turn on radio',
                'Enter frequency or channel',
                'Set squelch appropriately',
                'Perform radio check'
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
            'Set up radio correctly',
            'Transmit and receive messages',
            'Use proper radio procedures'
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
    },
    {
      id: 'fitness',
      title: 'Fitness',
      icon: 'fitness',
      accentColor: '#a371f7',
      tasks: [
        {
          id: 'epfa',
          title: 'EIB Fitness Assessment',
          timeStandard: 'Go/No-Go',
          taskBasis: 'USAIS PAM 350-6',
          conditions: 'EIB candidates must pass the Enhanced Physical Fitness Assessment (EPFA).',
          standards: 'Candidates are required to perform 49 push-ups in two minutes, 59 sit-ups in two minutes, and a four-mile run in 32 minutes.',
          steps: [
            {
              title: 'EPFA Standards',
              substeps: [
                '49 push-ups in 2 minutes',
                '59 sit-ups in 2 minutes',
                '4-mile run in 32 minutes'
              ]
            },
            {
              title: 'Notes',
              substeps: [
                'This is a GO/NO-GO event',
                'Event is not re-testable',
                'Cannot be waived',
                'No alternate events authorized',
                'Failing eliminates candidate from testing'
              ]
            }
          ],
          performanceMeasures: [
            'Complete push-ups to standard',
            'Complete sit-ups to standard',
            'Complete 4-mile run in time'
          ]
        },
        {
          id: 'ruck',
          title: '12-Mile Foot March',
          timeStandard: '3 hours',
          taskBasis: 'Phase Four',
          conditions: 'Final event of EIB/ESB testing. Candidates complete a 12-mile foot march.',
          standards: 'Complete the 12-mile foot march within 3 hours.',
          steps: [
            {
              title: 'Ruck March Standards',
              substeps: [
                'Distance: 12 miles',
                'Time limit: 3 hours',
                'Minimum ruck weight: 35 lbs (dry)',
                'Weapon required'
              ]
            },
            {
              title: 'Tips',
              substeps: [
                'Break in boots before the event',
                'Practice with weighted ruck',
                'Maintain consistent pace',
                'Stay hydrated',
                'Prevent blisters with proper sock system'
              ]
            }
          ],
          performanceMeasures: [
            'Complete 12 miles',
            'Finish within 3 hours',
            'Carry required weight'
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
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
  </svg>`,
  radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="5" y="4" width="14" height="17" rx="2"/>
    <circle cx="12" cy="14" r="3"/>
    <line x1="8" y1="7" x2="16" y2="7"/>
  </svg>`,
  fitness: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M6.5 6.5l11 11M4 10l2.5-2.5M10 4l2.5 2.5M14 20l-2.5-2.5M20 14l-2.5 2.5"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`
};
