---
title: "Stick to the default, where it makes sense"
description: "This post discusses when it's best to stick with a framework's defaults and when it's important to go beyond them, using Laravel as an example. It highlights the benefits and limitations of default settings, examines scenarios where customization is necessary, and offers practical advice for balancing convention with project needs."
urlSlug: "stick-to-the-default-where-it-makes-sense"
lang: "en"
translationKey: "stick-to-the-default"
pubDate: 2025-11-24
tags: ["Software Architecture"]
draft: false
---

"Stick to the default" is not a good advice. A better advice would be “Stick to the default, where it makes sense”. There are instances where it makes sense; most Laravel apps with one or two core features can and should definitely stick to the defaults, however, not without being intentional and pragmatic with those decisions. Also, if the app is B2C, most likely you can get away with those defaults. The same cannot be said for more complex projects with many moving parts. 

While team expertise should be a factor when deciding technologies and architectures, it should not be the driving one...

You can always find people with expertise on what you are working on, as long as you are not reinventing the wheel and going with a fully custom “architecture” that only you understand. A proper architecture allows your project to grow and to onboard new developers easily; not one or the other. 

Imagine an “all-in-one" CRM/ERP application that handles Leads, Contacts, Messaging, Knowledge Bases, Billing, Work Jobs, Telephony, and a bunch of other features. Some of those features are more critical than others, some are more write/read heavy, some require careful compliance and auditing... you get the idea. How would you prepare for that? There's so much you can do with a monolithic project that just follows the defaults.

A concrete example is Magento, a big eCommerce platform; it went from a monolithic to a modular architecture. You would want to ideally minimize those big refactors as much as possible, or at least, reduce blast radius.

If the project target audience is small, then, it makes sense to follow the defaults. But, if the project has the potential to reach a wide audience, then, careful planning and design is highly recommended. Picking architectures blindly or just because someone said so, is looking for trouble.

Laravel defaults provide a great starting point for any developer at any stage on their career. It makes developing and launching apps incredibly fast, which is great. For larger projects, the defaults may fall short, and you would want to avoid this as much as possible. You can get away with naming discipline, conventions, strict team agreements, documentation; but, once again, you need to evaluate and decide; definitely not going “stick to defaults” blindly. 

While Laravel is opinionated, those defaults are not forced on you and you can and should pick whichever structure better fits the project.

You don't need DDD (which Schlein makes reference to in his post) to have a proper architecture. 

How would I tackle the hypothetical CRM/ERP application mentioned earlier? Separating each feature would be a logical first step; common solutions for this is the layered architecture and modular monolith. Each feature must be isolated from the others and only communicate using a public API that each feature exposes. This decoupling allows you and your team to work on features without breaking those who depend on it, and you definitely can continue using framework tools like Eloquent, just not in the standard/default way. This design also has the inherent benefit of being able to move a feature to its own server (hint: micro services), should the need arise (rare, but possible), without doing major refactor. 

You can still use 100% of the framework features, you just need to make sure not to couple yourself to it, here's where design patterns come to play. 


