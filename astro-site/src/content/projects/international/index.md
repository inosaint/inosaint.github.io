---
title: Learnings from going International
description: What I learnt from launching the app for different countries
year: "2021"
company: "Gojek"

---

At Practo, I had my first experience designing for markets outside of India. Singapore used to be a major market for the Practo Ray product, and features like Tooth Maps were developed specifically for their dentists. In 2015, when we started rolling out the doctor app to Malaysia, Indonesia, Philippines and Brazil, the major changes we made to the product stopped at currency and number formatting.

However when I had to port the GoBiz app to Thailand, I got to learn a lot.

### Collaboration and Organization

GoBiz is a platform with other teams contributing to it so when we prepare for a new country launch, getting every team who is part of the launch involved is crucial.

Given that the features and the needs may differ across countries, I wanted to organize our projects separately on Abstract. Moreover, each feature/module needs to be a separate sketch file within the project instead of pages within the same sketch file to help manage the size and reduce the interference from other changes in the Master.

During the kickoff of a country launch, the Abstract project is setup and a corresponding Asana is set up to function as the tracker for the designs.
This project feeds back to the weekly SOS(Scrum of Scrums) that is run by the Program managers.

### Typography:

When your product is designed to support a language which only uses latin glyphs, then it's easy to take it to other countries with minimal changes. However with GoBiz, we were designed to support the local language script i.e., Thai in Thailand, Vietnamese in Vietnam and Simplified Chinese in Singapore. This means that the font you use needs to support these scripts. Our brand typeface, Maison Neue, unfortunately wasn't able to support these scripts and the application defaulted to using system fonts. In Thai, this led to the font size and styling getting affected on the screen and we noticed that every merchant we visited during our pilot used accessibility settings to increase the font size breaking the UI.

In Vietnamese, missing glyphs caused the text to awkwardly renders the missing glyph in another format.

Maison doesn't support the following vietnamese glyphs ờ ư ằ ố ế ữ ả ẻ ễ ỉ ỏ ủ ư ứ ừ ử ữ ự ỷ

So I worked with the brand and design system team leads to get them to finalize a fallback font which we could use in our designs. We narrowed down on NotoSans as it was a free option that supported what we needed.

Months after the Thai release, we learnt that to support printing receipts, we would need to do additional development to support Thai and Viet fonts.

P.S. wkwkwkwk and 5555555 are used to indicate laughter in Indonesian and Thai texting culture.

### Managing Copy

Managing designs is fairly easy compared to managing copy across countries. We did this before tools like Lokalise were built so we used (and still do) google docs and google sheets.

When we just had to support Bahasa Indonesian, the GoBiz copy was in a Google Doc which started getting really long and slow to load.

I had seen other teams using Google sheets to manage multi-language copy so I worked with Lauditta, the GoBiz UX writer, to create a new template that we could use based on our needs.

The devs manage the strings in the app using a 'key', we needed to map it to our copy lines. We learnt the hard way that this is something we should have setup early on as doing it now meant that we had to spend significant amount of time copy-pasting and searching through sheets.

We wanted to have the screen image for reference so that other teams can also review and understand the context on the page. This is helpful because the UX writers in other countries need to understand the context and it also helps the rest of the team members like QA and designers who do not know the language to test if the right copy is being used.

_Google sheets releasing 'Insert picture in cell' helped us achieve this._

We are now in the process of moving GoBiz's UX copy to [Lokalise](https://lokalise.com/).
