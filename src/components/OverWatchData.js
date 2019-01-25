import oversmash from 'oversmash'
import React, { Component } from 'react';

class PersonalStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount() {
        const ow = oversmash()
        ow.player('bob-12345').then(player => {
            console.log(player)
        })
        ow.playerStats('bob-12345', 'us', 'pc').then(player => {
            console.log(player)
        })

        this.setState({

        })
    }

    render() { 
        return ( 
        <React.Fragment>

        </React.Fragment>


        )
    }
}
 
export default PersonalStats;

// Create a new oversmash object. `oversmash()` accepts an options
// object (see below)
// const ow = oversmash()

// Get basic details about a user, including their platform/region accounts.
//
// ow.player('bob-12345').then(player => {
//     console.log(player)
// })

// Output:
// { name: 'bob-12345',
//   accounts:
//    [ { level: 440,
//        portrait: 'https://blzgdapipro-a.akamaihd.net/game/unlocks/xyz.png',
//        displayName: 'bob#12345',
//        platform: 'pc' } ] }

// Get detailed stats about a user (for a specific region), including
// achievements unlocked, per-career and per-hero stats, and their
// current competitive rank
// ow.playerStats('bob-12345', 'us', 'pc').then(player => {
//     console.log(player)
// })

// Output:
// { name: 'bob-12345',
//   region: 'us',
//   platform: 'pc',
//   stats:
//    { competitiveRank: 3700,
//      achievements:
//       [ { name: 'centenary', achieved: true },
//         { name: 'level_10', achieved: true },
//         { name: 'level_25', achieved: true },
//         { name: 'level_50', achieved: true },
//         { name: 'undying', achieved: true },
//         { name: 'survival_expert', achieved: true },
//         /* ... etc ... */],
//      quickplay:
//       { all: { /* avg stats across all characters */ }
//         reaper:
//          { combat:
//             { melee_final_blows: 190,
//               solo_kills: 2922,
//               objective_kills: 6592,
//               final_blows: 9519,
//               damage_done: 6897,
//               eliminations: 18456,
//               environmental_kills: 83,
//               multikills: 155 },
//            assists:
//             { healing_done: 1102,
//               recon_assists: 25,
//               teleporter_pads_destroyed: 18 },
//            best:
//             { eliminations_most_in_game: 44,
//               final_blows_most_in_game: 27,
//               damage_done_most_in_game: 17491,
//   /* ... etc ... */
