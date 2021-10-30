import theme from './theme'

export const PER_PAGE = 25

export const PERIODS = {
  daily: {
    name: 'Bugün',
    slug: 'daily'
  },
  weekly: {
    name: 'Bu hafta',
    slug: 'weekly'
  },
  monthly: {
    name: 'Bu ay',
    slug: 'monthly'
  },
  all: {
    name: 'Tüm ilanlar',
    slug: 'all'
  }
}

export const TYPES = {
  1: {
    name: 'Tam zamanlı',
    containerStyle: {
      borderColor: theme.colors.blue,
      backgroundColor: '#F1F7FC'
    },
    textStyle: {
      color: theme.colors.blue
    }
  },
  2: {
    name: 'Yarı zamanlı',
    containerStyle: {
      borderColor: theme.colors.orange,
      backgroundColor: '#FEF6F0'
    },
    textStyle: {
      color: theme.colors.orange
    }
  },
  3: {
    name: 'Stajyer',
    containerStyle: {
      borderColor: theme.colors.yellow,
      backgroundColor: '#FDFCF2'
    },
    textStyle: {
      color: theme.colors.yellow
    }
  },
  4: {
    name: 'Freelance',
    containerStyle: {
      borderColor: theme.colors.yellow,
      backgroundColor: '#FDFCF2'
    },
    textStyle: {
      color: theme.colors.yellow
    }
  }
}

export const QUERY_TYPE = {
  TAG: 'tag',
  COMPANY: 'company',
  SEARCH: 'search',
  POSITION_TAG: 'positionTag'
}

export const tags = [
  'Frontend',
  'Backend',
  'Mobile',
  'DevOps',
  'İstanbul',
  'Ankara',
  'İzmir',
  'Remote',
  'node',
  'react',
  'react native',
  'vue',
  'javascript',
  'typescript',
  'java',
  'c#',
  'next',
  'css',
  'html',
  'sass',
  'scss',
  'tailwind',
  'php',
  'laravel',
  'flutter',
  'redux',
  'asp.net',
  'angular',
  'mongodb',
  'jquery',
  'aws',
  'api',
  'mysql',
  'ui',
  'ux',
  'sql',
  'azure',
  'android',
  'ios',
  'web',
  'developer',
  'core'
]
