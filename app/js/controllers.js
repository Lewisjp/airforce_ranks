var airforcerankApp = angular.module('airforcerankApp',[]);

airforcerankApp.controller('AirForceRankCtrl', function ($scope) {
		$scope.ranks = [
      {'name': 'Airman Basic',
        'payGrade': 'E1',
        'role': 'The AB is an apprentice who is acquiring and demonstrating knowledge of military customs, courtesies, traditions, and Air Force standards while learning both military and technical skills. The official term of address is airman basic or airman.',
        'image': 'basic.jpg'
      },
      {'name': 'Airman',
        'payGrade': 'E2',
        'role': 'An Amn, while still primarily an apprentice, is expected to understand and conform to military standards. The official term of address is airman. The average Air Force wide active duty time for promotion to the rank of Airman is six months.',
        'image': 'afe2.gif'
      },
      {'name': 'Airman First Class',
        'payGrade': 'E3',
        'role': 'An A1C must comply with Air Force standards and be a role model for subordinates. He or she is expected to devote efforts to mastering the necessary skills in the new career fields. The official term of address is airman first class or airman. The average Air Force wide active duty time for promotion to the rank of Airman First Class 16 months.',
        'image': 'afe3.gif'
      },
      {'name': 'Senior Airman',
        'payGrade': 'E4',
        'role': 'A SrA is in a transition period from journeyman to NCO. Development of supervisory and leadership skills through PME and individual study is essential. All SrA should conduct themselves in a manner commensurate with established standards, thereby asserting a positive influence on other airmen. The SrA must, at all times, present the image of competence, integrity, and pride. The official term of address is senior airman or airman. The average Air Force wide active duty time for promotion to the rank of Senior Airman is 36 months (three years).',
        'image': 'afe4.gif'
      },
      {'name': 'Staff Sergeant',
        'payGrade': 'E5',
        'role': 'SSgts are primarily craftsmen with certain NCO supervisory responsibilities. They may hold either a 5- (journeyman) or 7- (craftsman) skill level. SSgts must complete their 7-skill level through upgrade training to be promoted to TSgt. SSgt supervisory duties differ from those of the TSgt only in scope and span of control. SSgts strive for greater supervisory competence as they function in their technical capacity. They are responsible for their subordinates and the effective accomplishment of assigned tasks. They ensure proper and effective use of personnel and materiel. SSgts must continuously strive to further their development as technicians and supervisors. The official term of address is staff sergeant or sergeant. The average Air Force wide active duty time for promotion to the rank of Staff Sergeant is 6.9 years.',
        'image': 'afe5.gif'
      },
      {'name': 'Technical Sergeant',
        'payGrade': 'E6',
        'role': 'TSgts hold a 7-skill level and are qualified to perform highly complex technical duties in addition to providing supervision. They are responsible for the career development of all enlisted personnel under their supervision. They must obtain maximum performance from each subordinate and ensure the product or service is of the quality necessary for total mission effectiveness. TSgts will continuously strive to broaden and perfect their professional expertise and supervisory techniques. The official term of address is technical sergeant or sergeant. The average Air Force wide active duty time for promotion to the rank of Technical Sergeant is 14 years.',
        'image': 'afe6.gif'
      },
      {'name': 'Master Sergeant',
        'payGrade': 'E7',
        'role': 'MSgts function primarily in craftsman and supervisory positions as they prepare for more advanced leadership positions. MSgts hold a 7-skill level. This rank carries significantly increased responsibilities and requires a broad technical and managerial perspective. MSgt selects should enroll in and complete the AFSNCOA correspondence course. The official term of address is master sergeant or sergeant. The average Air Force wide active duty time for promotion to the rank of Master Sergeant is 16.1 years.',
        'image': 'afe7.gif'
      },
      {'name': 'First Sergeant',
        'payGrade': 'E7',
        'role': '',
        'image': 'af1ste7.gif'
      },
      {'name': 'First Sergeant',
        'payGrade': 'E8',
        'role': '',
        'image': 'af1ste8.gif'
      },
      {'name': 'Senior Master Sergeant',
        'payGrade': 'E8',
        'role': 'SMSgts perform as superintendents or managers. Broad management skills are essential to exercise the responsibilities of the higher leadership positions in which SMSgts serve. The 9-skill level "Superintendent" is awarded when SMSgts sew on E-8. SMSgts should continue their professional development to become viable candidates for unique assignment opportunities and future promotion selection consideration to CMSgt. The official term of address is senior master sergeant or sergeant. The average Air Force wide active duty time for promotion to the rank of Senior Master Sergeant is 19.1 years.',
        'image': 'afe8.gif'
      },
      {'name': 'Chief Master Sergeant',
        'payGrade': 'E9',
        'role': 'The rank of CMSgt is the highest Air Force enlisted rank, with the exception of the Chief Master Sergeant of the Air Force. CMSgts are superintendents and managers and provide senior enlisted leadership. They are assigned chief enlisted manager (CEM) codes upon selection to CMSgt and may fill any managerial-level position and perform all duties not prohibited by law or directive. CMSgts are advisors and enlisted force managers. The official term of address is chief master sergeant or chief. The average Air Force wide active duty time for promotion to the rank of Chief Master Sergeant is 22.6 years.',
        'image': 'afe9.gif'
      },
      {'name': 'First Sergeant',
        'payGrade': 'E9',
        'role': 'First Sergeants can be in the pay grades of E-7, E-8, or E-9. The first sergeant exercises general supervision over all enlisted personnel assigned to the unit, even if they technically outrank the "shirt" via pay grade. Thats because the first sergeant works directly for the unit commander and derives his/her authority directly from the commander. When the first sergeant acts or speaks in his/her official capacity, he/she is acting or speaking "for the commander," in all matters relating to assigned enlisted personnel. The first sergeant’s role is time honored and rich in custom and tradition. A distinguishing diamond device on the chevron identifies the first sergeant. As the vital link between the commander, enlisted personnel, and support agencies, the first sergeant must ensure the enlisted force understands the commander’s policies, goals, and objectives, and that support agencies are responsive to the needs of unit personnel. Additionally, the first sergeant must remain vigilant for and move to resolve issues that, left unchecked, would adversely impact troop readiness.',
        'image': 'af1ste9.gif'
      },
      {'name': 'Command Chief Master Sergeant',
        'payGrade': 'E9',
        'role': 'What the first sergeant is at the squadron level, the Command Chief Master Sergeant is at the Wing, Major Command (MAJCOM), and Numbered Air Force Level. CCMs work directly for the Wing Commander, MAJCOM Commander and/or Numbered Air Force Commander. They advise commanders on matters impacting the enlisted force, such as proper utilization, quality of enlisted leadership, management/supervisor training, operations tempo, and quality of life. They monitor compliance with Air Force standards, serve on advisory councils, and maintain a close relationship with the local community. They maintain a liaison between their commander, the enlisted force, and staff members, and they communicate with commanders on problems, concerns, morale, and attitudes of the enlisted force. They also ensure their commander’s policies are known and understood by the enlisted force and serve as the functional manager for assigned first sergeants. CCMs are all in the pay grade of E-9. CCMs wear the distinctive stripes shown to the left.',
        'image': 'afcmsgt.gif'
      },
      {'name': 'Chief Master Sergeant of the Air Force',
        'payGrade': 'E9',
        'role': 'The CMSAF acts as personal advisor to the highest-ranking military commander in the Air Force, the Air Force Chief of Staff (CSAF) and the highest ranking civilian leader in the Air Force, the Secretary of the Air Force (SECAF) regarding the welfare, health, morale, proper utilization, and progress of the enlisted force. The office of the Chief Master Sergeant of the Air Force represents the highest level of enlisted leadership, and as such, provides the direction for the enlisted corps and represents their interests, as appropriate, to the American public. The CMSAF testifies before various legislative committees on issues such as pay and compensation and also provides the enlisted voice on numerous boards and panels. The CMSAF is the senior-ranking enlisted member of the Air Force.',
        'image': 'afcmsoafe9_01.gif'
      }
    ];
    $scope.orderProp = 'payGrade';
});