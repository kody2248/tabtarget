var imageBaseUrl = 'https://wow.zamimg.com/images/wow/icons/large/'
var classes =
    [
        {
            "name":"Death Knight",
            "image":"../../../assets/icons/class/classicon_deathknight.jpg",
            "classColor":"#d43d57",
            "specs":
                [
                    {
                        "image":imageBaseUrl+"spell_deathknight_bloodpresence.jpg",
                        "name":"Blood"
                    },
                    {
                        "image":imageBaseUrl+"spell_deathknight_frostpresence.jpg",
                        "name":"Frost"
                    },
                    {
                        "image":imageBaseUrl+"spell_deathknight_unholypresence",
                        "name":"Unholy"
                    }
                ]
        },
        {
       
            "name":"Demon Hunter",
            "image":"../../../assets/icons/class/classicon_demonhunter.jpg",
            "classColor":"#bd4be3",
            "specs":[
                {
                "image":imageBaseUrl+"ability_demonhunter_specdps.jpg",
                "name":"Havoc"
                },
                {
                "image":imageBaseUrl+"ability_demonhunter_spectank.jpg",
                "name":"Vengeance"
                }
            ]
            
        },
        {
           
            "name":"Druid",
            "image":"../../../assets/icons/class/classicon_druid.jpg",
            "classColor":"#FF7C0A",
            "specs":[
                {
                "image":imageBaseUrl+"talentspec_druid_balance.jpg",
                "name":"Balance"
                },
                {
                "image":imageBaseUrl+"talentspec_druid_feral_cat.jpg",
                "name":"Feral"
                },
                {
                "image":imageBaseUrl+"talentspec_druid_feral_bear.jpg",
                "name":"Guardian"
                },
                {
                "image":imageBaseUrl+"talentspec_druid_restoration.jpg",
                "name":"Restoration"
                }
            ]
            
        },
        {
           
            "name":"Hunter",
            "image":"../../../assets/icons/class/classicon_hunter.jpg",
            "classColor":"#AAD372",
            "specs":[
                {
                "image":imageBaseUrl+"ability_hunter_beasttaming.jpg",
                "name":"Beast Mastery"
                },
                {
                "image":imageBaseUrl+"ability_marksmanship.jpg",
                "name":"Marksmanship"
                },
                {
                "image":imageBaseUrl+"ability_hunter_swiftstrike.jpg",
                "name":"Survival"
                }
            ]
            
        },
        {
           
            "name":"Mage",
            "image":"../../../assets/icons/class/classicon_mage.jpg",
            "classColor":"#3FC7EB",
            "specs":[
                {
                "image":imageBaseUrl+"spell_frost_frostbolt02.jpg",
                "name":"Frost"
                },
                {
                "image":imageBaseUrl+"spell_fire_firebolt02.jpg",
                "name":"Fire"
                },
                {
                "image":imageBaseUrl+"spell_holy_magicalsentry.jpg",
                "name":"Arcane"
                }
            ]
            
        },
        {
            
            "name":"Monk",
            "image":"../../../assets/icons/class/classicon_monk.jpg",
            "classColor":"#00FF98",
            "specs":[
                {
                "image":imageBaseUrl+"spell_monk_brewmaster_spec.jpg",
                "name":"Brewmaster"
                },
                {
                "image":imageBaseUrl+"spell_monk_mistweaver_spec.jpg",
                "name":"Mistweaver"
                },
                {
                "image":imageBaseUrl+"spell_monk_windwalker_spec.jpg",
                "name":"Windwalker"
                }
            ]
            
        },
        {
            
            "name":"Paladin",
            "image":"../../../assets/icons/class/classicon_paladin.jpg",
            "classColor":"#F48CBA",
            "specs":[
                {
                "image":imageBaseUrl+"spell_holy_holybolt.jpg",
                "name":"Holy"
                },
                {
                "image":imageBaseUrl+"spell_holy_auraoflight.jpg",
                "name":"Retribution"
                },
                {
                "image":imageBaseUrl+"spell_holy_devotionaura.jpg",
                "name":"Protection"
                }
            ]
            
        },
        {
          
            "name":"Priest",
            "image":"../../../assets/icons/class/classicon_priest.jpg",
            "classColor":"#FFFFFF",
            "specs":[
                {
                "image":imageBaseUrl+"spell_holy_guardianspirit.jpg",
                "name":"Holy"
                },
                {
                "image":imageBaseUrl+"spell_holy_wordfortitude.jpg",
                "name":"Discipline"
                },
                {
                "image":imageBaseUrl+"spell_shadow_shadowwordpain.jpg",
                "name":"Shadow"
                }
            ]
            
        },
        {
          
            "name":"Rogue",
            "image":"../../../assets/icons/class/classicon_rogue.jpg",
            "classColor":"#FFF468",
            "specs":[
                {
                "image":imageBaseUrl+"ability_backstab.jpg",
                "name":"Assassination"
                },
                {
                "image":imageBaseUrl+"ability_stealth.jpg",
                "name":"Subtlety"
                },
                {
                "image":imageBaseUrl+"inv_sword_30.jpg",
                "name":"Outlaw"
                }
            ]
            
        },
        {
         
            "name":"Shaman",
            "image":"../../../assets/icons/class/classicon_shaman.jpg",
            "classColor":"#0070DD",
            "specs":[
                {
                "image":imageBaseUrl+"",
                "name":"Restoration"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Enhancement"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Elemental"
                }
            ]
            
        },
        {
          
            "name":"Warlock",
            "image":"../../../assets/icons/class/classicon_warlock.jpg",
            "classColor":"#8788EE",
            "specs":[
                {
                "image":imageBaseUrl+"",
                "name":"Destruction"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Demonology"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Affliction"
                }
            ]
            
        },
        {
          
            "name":"Warrior",
            "image":"../../../assets/icons/class/classicon_warrior.jpg",
            "classColor":"#C69B6D",
            "specs":[
                {
                "image":imageBaseUrl+"",
                "name":"Fury"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Arms"
                },
                {
                "image":imageBaseUrl+"",
                "name":"Protection"
                }
            ]
        
    }
];

module.exports = classes;