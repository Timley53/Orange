export const PieData = [
    {
      "id": "go",
      "label": "go",
      "value": 489,
      "color": "hsl(265, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 179,
      "color": "hsl(357, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 241,
      "color": "hsl(67, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 581,
      "color": "hsl(304, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 121,
      "color": "hsl(72, 70%, 50%)"
    }
  ]


 export const Defaultuser = {
    UserDetails:{
        name: '',
        email:''
    },
    expenses:[],
    categories:[
        {
            name:'food',
            budget: 3000,
            value: [], 
        },
        {
            name:'entertaiment',
            budget: 3000,
            value: [],     
           },
        {
            name:'utility',
            budget: 3000,
            value: [],            
        },
        {
            name:'transport',
            budget: 3000,
            value: [],            
        },
    ],
    savings:{
        goals:[
            {
                title:'phone',
                target: 200,
                current: 20
            }
        ]
    },
    income:[
      {
        title: 'side gig',
        amount: 200
      }
    ],
  
  }

