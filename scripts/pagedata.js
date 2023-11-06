// store all content of different pages in one file

export const pageData = [
  //testpage data
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

  //ato page real data
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
  },
];
