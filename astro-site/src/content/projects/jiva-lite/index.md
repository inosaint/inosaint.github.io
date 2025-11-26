---
title: "Jive Lite"
description: "Building a farmer-centric experience for buying Corn in rural Indonesia"
year: "2023-2024"
company: "Jiva"
image: "./jivalite.jpg"
---

<!-- Add your project content here -->

When I joined Jiva in 2022, we had been leveraging collectors in rural areas to facilitate our business model.

The harvest of a smallholder corn farmer is typically around 2.5k-3k tons. The economics of sending it to the buyer isnt economically viable for such a small quantity when you factor in labour cost & transport cost. Additionally the ability to evaluate quality at the farmer level is approximate. 

[Pricing Graphic]
[Corn quality (and pricing) is measured in terms of the moisture content of the corn kernels]

Collectors helped fill this gap by aggregating corn for dispatch from multiple farmers and using moisture meters to estimate quality of the corn. 

Jiva’s business model was working with buyers to acquire purchase orders for the corn and coordinate with the collectors to dispatch to feedmills to get the best price. 
This wasnt a disruptionary model. The concept of middlemen have always existed in agricultural systems. 

What was different was the concept of a single entity who’s presence across provinces helped get better prices. 
Our Collectors earned commission for selling through us and our Farmers got the best price. 

But the question remained.. **could we do even better?** and that's where Jiva Lite came in.


## Challenge

- One of the reasons we resorted to the micro-collector model was the technical literacy and mobile device penetration in rural Indonesia. Most farmers still used feature phones and many families just had a shared single device usually operated by the children or the wife. For those who did have a smartphone device, local storage and internet were critical constraints. 
It didn't make sense for them to keep our apps on their phones across seasons and our churn data suggested that as well.

- Our research had shown us that the Sahabat Jiva android app was a complex system compared to the real world way to buying and selling corn

- From the business side, this meant our customer acqusition funnel was fairly expensive and with the commissions and price fluctuations of the market, the Gross Contribution (GC) that we earned per kg was far below what we wanted to be at.

## Solution

![Early Jiva Lite app wireframes](lite-wire.png "Early Jiva Lite app wireframes")

The first idea for Jiva Lite came out of our efforts to simplify the Sahabat Jiva App information architecture and workflows. But it took a few more months before we got a chance to try to solve this.
The overwhelming idea at that time was to make another app albeit a "lite" one. But a few of us felt that Whatsapp was the way to go. So I used Landbot to quickly prototype how a Whatsapp based flow would look like.

#### Why Whatsapp? 
Meta has deep penetration in Indonesia. Indonesia doesnt have net neutrality laws and hence Meta, Google, Netflix, etc have mobile plans that enabled unlimited usage of their services. 
This is one of the reason that Facebook and Whatsapp are the communication tool of choice in our users. This meant that 
we could be assured that unlike a mobile app, our target audience would definitely have Whatsapp on their phones.

After pitching this to leadership, we got buyin to use the Whatsapp flow as a pilot project to test out the viability of the Jiva Lite business model.

#### Why was Jiva Lite different?
- If Jiva Lite had to succeed then it should be economically viable while at the same time, it should not cannibalize our existing businesses. So the pricing logic we set was to keep our offering price at 100idr/kg less than the price we showed in our Sahabat Jiva app. 
- A recent tax exemption made it easy for us to operate at the small scale without needing unnecessary documentation like KTPs
- For the first time (probably), small holders could sell direct to our buyers irrespective of the volume of their harvest and get paid within a few hours.
- Meta Ads and Whatsapp QRs let users quickly get into our flow and check prices.

### Building the MVP
A small team got together to work on this part time. Designing the first flow to be as simple took a few iterations. We used Figma and FigJam a lot to align everyone and used Slack's inbuilt project management system to keep us on track.
Weekly syncs were run to share progress with the larger group of stakeholders and monthly meetings with the CEO.

<div class="image-grid-2">
  <img src="./figjam.png" alt="Blueprinting" />
  <img src="./jivalitev1.png" alt="Designs for the first release version on Figma" />
</div>

![Figjam](./figjam.png "Blueprinting")

Our first version was built using Whatsapp Flows and simplified the crop buying flow to just 3 steps; View Prices, Register and Send Truck.

![Designs for the first release version on Figma](./jivalitev1.png "Designs for the first release version on Figma")

### Preparing for Go-To-Market

Onboarding internal teams
We ran sessions with our field agents, customer service agents and marketing teams to onboard them onto the pilot project. I prepared an "objection handling" (a FAQ document) for CX team to use for answering any queries they may receive on their channels.
Speaking to our on-ground field agents helped us address their concerns about Jiva Lite and its impact on their operations.

Selecting a region for piloting. 
based on the time of the year and our micro-collector density, we decided to go with the districts closest to Makassar; Maros and Takalar. This meant that the distances to be travelled by the farmers to our buyers were just a few hours away.




## Impact

[Add metrics and impact]
