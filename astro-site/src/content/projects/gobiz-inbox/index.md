---
title: Designing the Inbox experience for GoBiz
description: How we designed the in-app comms channel
year: "2021"
company: "Gojek"

---

The Chat SDK was built to support products wanting to integrate chat into their flows. However like many other platformized products, they end up being looked as solutions for use cases they were not designed for. The GoBiz inbox requirement wasn't my first experience with dog fooding, but it was one that I was able to influence positively for the benefit of the users.

We wanted to build an Inbox, an in-app channel for notifying our users. We just needed one-way communication. I do not understand the reason behind why product pushed to use the SDK, despite the arguments that the SDK wasn't able to support our web product and wasn't designed to communicate business updates.

### Chat is chat, not inbox:

I created a document to explain what that decision meant for the app.
If we use the chat sdk, then in the future as other teams build on the chat platform, we should plan to group all kinds of chat in a single space. This would align with the mental model of the user. This space would be the go-to place to follow up on your "conversations", whether its about onboarding a new outlet or following up about your GoFresh order.

_Decision:_ We decided that all chats will show up in Inbox but we will need to visually separate them from the business chats. This is something that the Chat team had not yet designed for.

### Where should Inbox/chat go?

Given that Inbox is something we are considering for communication, it should be easily accessible and indicate unread chats. Given the current structure of the GoBiz app, we could only think of 2 possible positions for the Inbox.

However neither of these positions fulfill the conditions of

1. Visibility of new messages: The red dot on Lainnya can't showcase a number since there are several other modules which have a no-number indication.

2. Accessible from various parts of our app: A gofood merchant would jump right to the Orders inbox when they open the app and has no need to aware of this "notification'

_Decision:_ However without the redesign being prioritized, we decided to keep the entry point on the top right of the 'Lainnya' page.

### Shuffle vs Inbox:

1. Currently there can be overlaps. Overlaps may lead to reduction in importance of Inbox content.

2. Can 'Promo' channel in Inbox be completely replaced by a shuffle card channel on lainnya? because promos need segmentation. Inbox may not work that way.

_Decision:_ No decision yet

### Design iterations

The Inbox requirement wasn't a new one. 11 months ago, Saneef had worked on how we could introduce communication channels(banner and inbox) in our /existing/ app. [(Aside: His redesign had 'Inbox' as a tab on the bottom navigation)](https://share.goabstract.com/8af61eee-de93-4f63-b0f8-64922742a29e?mode=design&sha=875263ee629f633ddd9229602605e3870884c3da)

What was good about this iteration was that latest messages would be visible on the Lainnya page with a way for users to filter different kinds of messages. However this design wouldn't scale well if there were many channels. Think how filters work on Gojek Home's shuffles. Same problem.

When we decided to adopt the Chat SDK, it came with a constraint that the view would be a chat window.

So this constraint causes us to have limited explorations for the channel view. Based on this, here are two iterations that could be possible.

#### Iteration 1:

Iteration 1 is having a list of channels on the second page, but without the full message so users would need to make an additional click through to get the full message.

#### Iteration 2:

This exploration attempts to use a notifier informing user about a new message. It could include the text of the message or a generic '1 new message'. In the chat window, we can see the latest message of a channel up front without clicking again to see the message. Even CTAs could be visible here.

So we went ahead with user-testing with both these iterations, and 'Iteration 2' came out successful.

#### Key Learnings from the research

1. People may ignore the position of the Inbox because of its proximity to the logout button

2. The inbox icon was not understood, so we switched to the envelope icon and called it 'Kotak Pesan'
