const addictionsData =
{
  //  *  *  *  Start of Internet Tab  *  *  *  //

  internet: {
    coolmathgames: {
      id: 'coolmathgames',
      purchaseText: '',
      text: [
        'visit coolmathgames.com',
        'check on your Webkinz',
        'decorate your igloo',
        'spin the wheel of wow'
      ],
      cooldown: 5 * 1000,
      resIds: ['Hap'],
      deltas: [5],
      isUnlocked: true,
      unlockIds: ['Hap'],
      unlockCost: [0]
    },
    facebook: {
      id: 'facebook',
      purchaseText: 'Make a Facebook account',
      text: [
        "stalk your ex's feed",
        'look at memes',
        'drunk post racist rant',
        'argue over politics with distant relative',
        'make earth sandwich with indian guy'
      ],
      cooldown: 2 * 1000,
      resIds: ['Hap'],
      deltas: [4],
      isUnlocked: false,
      unlockIds: ['Hap'],
      unlockCost: [50]
    },
    reddit: {
      id: 'reddit',
      purchaseText: 'Make a reddit account',
      text: [
        'care about your karma',
        'get buried in new',
        'write comment that gets guilded'

      ],
      cooldown: 10 * 1000,
      resIds: ['Hap', 'Tech'],
      deltas: [20, 0.5],
      isUnlocked: false,
      unlockIds: ['Hap'],
      unlockCost: [1000]
    },
    chan: {
      id: 'chan',
      purchaseText: 'become anon',
      text: [
        'trap threads',
        'feet thread',
        'ylyl',
        'iaots best album',
        'jenny death when',
        "pool's closed",
        'hoard frog photos'

      ],
      cooldown: 30 * 1000,
      resIds: ['Hap', 'Tech'],
      deltas: [100, 1],
      isUnlocked: false,
      unlockIds: ['Hap', 'Tech'],
      unlockCost: [10000, 50]
    },
    conspiracyTheories: {
      id: 'conspiracyTheories',
      purchaseText: 'Believe in conspiracy theories',
      text: [
        'tweet at donald trump',
        'raid area 51',
        'buy supplements from infowars',
        'do acid with alex jones',
        'take the red pillgit'

      ],
      cooldown: 60 * 1000,
      resIds: ['Hap'],
      deltas: [1000],
      isUnlocked: false,
      unlockIds: ['Hap', 'Tech'],
      unlockCost: [200000, 100]
    }
  },

  //  *  *  *  Start of Food Tab  *  *  *  //

  food: {
    cookie: {
      id: 'cookie',
      purchaseText: '',
      text: [
        'Put your hand in the cookie jar'
      ],
      cooldown: 10 * 1000,
      resIds: ['Hap', 'Fat'],
      deltas: [5, 10],
      isUnlocked: false,
      unlockIds: ['Hap'],
      unlockCost: [200]
    },
    icecream: {
      id: 'icecream',
      purchaseText: '',
      text: [
        'Eat some icecream'
      ],
      cooldown: 20 * 1000,
      resIds: ['Hap', 'Fat'],
      deltas: [10, 40],
      isUnlocked: false,
      unlockIds: ['Hap', 'Fat'],
      unlockCost: [1000, 200]
    },
    mcRonaldsEat: {
      id: 'mcRonaldsEat',
      purchaseText: '',
      text: [
        'Eat at McRonalds'
      ],
      cooldown: 2 * 60 * 1000,
      resIds: ['Hap', 'Fat'],
      deltas: [500, 1000],
      isUnlocked: false,
      unlockIds: ['Hap', 'Fat'],
      unlockCost: [20000, 1000]
    }
  },

  //  *  *  *  Start of Money Tab  *  *  *  //

  money: {
    mcRonaldsWork: {
      id: 'mcRonaldsEat',
      purchaseText: '',
      text: [
        'Flip burgers'
      ],
      cooldown: 8 * 1000,
      resIds: ['Money'],
      deltas: [10],
      isUnlocked: false,
      unlockIds: ['Hap'],
      unlockCost: [20000]
    },
    pizzaDelivery: {
      id: 'pizzaDelivery',
      purchaseText: '',
      text: [
        'Deliver some pizza'
      ],
      cooldown: 30 * 1000,
      resIds: ['Money'],
      deltas: [80],
      isUnlocked: false,
      unlockIds: ['Hap'],
      unlockCost: [400000]
    }
  }
}
export default addictionsData
