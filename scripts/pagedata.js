// store all content of different pages in one file

export const pageData = [
  /*//testpage data
  {
    pageName: "ATO Test",
    pageContents: [
      {
        contentHeading: "Financial year",
        contentParas: [
          "Australian financial starts on 1 July and ends on 30 June the following calendar year.",
          "You usually have till 30 October to file your tax return.",
        ],
      },

      {
        contentHeading: "Where to lodge tax return",
        contentParas: [
          `The most convenient portal to do this is to register an account with
          <span><a href="https://my.gov.au/">myGov</a></span>. Once registered, 
          you can add ATO as a linked service. Then you will be able to view your account
          details, all the tax lodgements, etc from there.`,
        ],
      },
    ],
  },
  */

  //safty content
  {
    pageName: "Safety",
    pageContents: [
      {
        contentHeading: "Police",
        contentParas: [
          `<strong>000</strong> - This the number to call when there is emergency. 
          Don't be shy.`,
        ],
      },

      {
        contentHeading: "Campus security",
        contentParas: [
          `First thing when you settle down at the campus is to get the number of your campus security team. They usually offer security escort service, especially after dark. If you have class at night, ask for their help. Again, don't be shy.`,
        ],
      },

      {
        contentHeading: "Know your surroundings",
        contentParas: [
          `During orientation, ask which streets/areas are to be avoided. Call campus security to ask similar questions. Check with locals as well.
        Always use well-lit streets with more crowd. Try get someone else to walk with you after dark. And Take Off yor earpieces!`,
        ],
      },
    ],
  },

  //renting page content
  {
    pageName: "Renting",
    pageContents: [
      {
        contentHeading: "Renting process",
        contentParas: [
          `Here is a general <a href=
        "https://liveinmelbourne.vic.gov.au/live/housing-and-property/renting-a-house-or-apartment">
        <em>guide</em></a> on the renting process in Melbourne.`,

          `Renters have rights.
        You can read about your rights on <a href=
        "https://www.consumer.vic.gov.au/housing/renting"><em>Consumer Affairs Victoria</em></a>
        website.`,

          `Remember to keep the house clean. Having a good track record and reference will go a long way
        and saves your a lot of hussle down the road. But this does not mean you have to give
        unreasonable concessions to the landlord. If your right under the law and contract is violated,
        act to protect your right.`,
        ],
      },
    ],

    contentLinks: [
      {
        description: `Find a place - Domain`,
        contentURL: `https://www.domain.com.au/`,
      },

      {
        description: `Find a place - Realestate.com.au`,
        contentURL: `https://www.realestate.com.au/`,
      },
    ],
  },

  //medical page data

  {
    pageName: "Medical",
    pageContents: [
      {
        contentHeading: "Medical - tbd",
        contentParas: [`tbd`, `tbd`, `tbd`],
      },
    ],

    contentLinks: [
      {
        description: ``,
        contentURL: ``,
      },

      {
        description: ``,
        contentURL: ``,
      },
    ],
  },

  //centrelink page data

  {
    pageName: "Centrelink",
    pageContents: [
      {
        contentHeading: "Centrelink - tbd",
        contentParas: [`tbd`, `tbd`, `tbd`],
      },
    ],

    contentLinks: [
      {
        description: ``,
        contentURL: ``,
      },

      {
        description: ``,
        contentURL: ``,
      },
    ],
  },

  //banking page data

  {
    pageName: "Banking",
    pageContents: [
      {
        contentHeading: "Banking products",
        contentParas: [
          `Banks offer many financial services/products.
        The most basic services you will use day-to-day are transaction accoutns and 
        savings accounts. Savings accounts pay interest on your balances; transactions
        accounts does not pay interest. Some transacton accoutns even charge 
        monthly fees.`,
        ],
      },

      {
        contentHeading: "Managing your bank accounts",
        contentParas: [
          `The best pratice for managing your bank accounts is to have 
          some separation. I would recommend you to use at least two banks, 
          one savings account and three transaction accounts.`,
          `One transaction account should be used to receive your salary
          or any other income. One transaction account is for your normal
           spending: grocery, bills, etc. The third transaction account is 
           for your online shopping, etc. Keep your salary receiving account
           and spending accunts with different banks, if possible. Keep your 
           money in the savings account. Only transfer enough money to the 
           spending accounts to cover bills/expenses monthly/fortnightly.`,
          `This arrangement will give you maximum protection on your privacy 
           and against rampant cyber scams.`,
        ],
      },

      {
        contentHeading: "Mortgage accounts",
        contentParas: [
          `You are going to have mortgage accounts when you are buying your
          first property. This is a more complex products with many features.
          We will talk about that when you plan to buy your first home.`,
        ],
      },
    ],

    contentLinks: [
      {
        description: `Commonwealth Bank`,
        contentURL: `https://www.commbank.com.au/`,
      },

      {
        description: `Westpac`,
        contentURL: `https://www.westpac.com.au/`,
      },

      {
        description: `ANZ Bank`,
        contentURL: `https://www.anz.com.au/personal/`,
      },

      {
        description: `NAB`,
        contentURL: `https://www.nab.com.au/`,
      },
    ],
  },

  //ato page data
  {
    pageName: "ATO",
    pageContents: [
      {
        contentHeading: "Financial year",
        contentParas: [
          "Australian financial starts on 1 July and ends on 30 June the following calendar year.",
          "You usually have till 30 October to file your tax return.",
        ],
      },

      {
        contentHeading: "Payslip",
        contentParas: [
          `If your are employed, part-time, full-time, contract, 
                    your employer must provide you with payslips on each pay.`,
          `These days, most employer submit your pay data to ATO electronicall. However, 
                    it is always a good idea to keep copies of your payslips. 
                    One common use of these payslips will be when you apply for a mortgage, 
                    your bank will ask for the most recent payslips.`,
        ],
      },

      {
        contentHeading: "Where to lodge tax return",
        contentParas: [
          `The most convenient portal to do this is to register an account with
          <span><a href="https://my.gov.au/">myGov</a></span>. Once registered, 
          you can add ATO as a linked service. Then you will be able to view your account
          details, all the tax lodgements, etc from there.`,
        ],
      },

      {
        contentHeading: "Deductions",
        contentParas: [
          `If you do some contract work, commissions, etc, remember to keep copies all the money
          you have spent for the purpose of doing that work. This could be travel expenses, meals,
          tools, stationaries, just to name a few.`,

          `You will be able to claim some deductions when you lodge your tax return. This will reduce
          the tax you pay. Also keep good logbook of your mileage of driving between work sites 
          (date, from, to and KMs), as well as the hours you work from home. <br>
          The tax rule regarding this is a bit complex. So consult me or mon when you do your first tax return.`,
        ],
      },
    ],
    //links
    contentLinks: [
      {
        description: `ATO - Preparing your tax return`,
        contentURL: `https://www.ato.gov.au/Individuals/Your-tax-return/`,
      },
    ],
  },

  //driving page data

  {
    pageName: "Driving",
    pageContents: [
      {
        contentHeading: "Driving - tbd",
        contentParas: [`tbd`, `tbd`, `tbd`],
      },
    ],

    contentLinks: [
      {
        description: ``,
        contentURL: ``,
      },

      {
        description: ``,
        contentURL: ``,
      },
    ],
  },

  //Investing page data

  {
    pageName: "Investing",
    pageContents: [
      {
        contentHeading: "Investing - tbd",
        contentParas: [`tbd`, `tbd`, `tbd`],
      },
    ],

    contentLinks: [
      {
        description: ``,
        contentURL: ``,
      },

      {
        description: ``,
        contentURL: ``,
      },
    ],
  },

  //civil duty page data

  {
    pageName: "Voting",
    pageContents: [
      {
        contentHeading: "Voting - tbd",
        contentParas: [`tbd`, `tbd`, `tbd`],
      },
    ],

    contentLinks: [
      {
        description: `AEC - Check your electoral enrolment`,
        contentURL: `https://check.aec.gov.au/`,
      },

      {
        description: `AEC - Update your details`,
        contentURL: `https://www.aec.gov.au/enrol/update-my-details.htm`,
      },
    ],
  },

  //add more pages below
];
