---
title: "Stick to the default, where it makes sense"
description: "This post discusses when it's best to stick with a framework's defaults and when it's important to go beyond them, using Laravel as an example. It highlights the benefits and limitations of default settings, examines scenarios where customization is necessary, and offers practical advice for balancing convention with project needs."
urlSlug: "stick-to-the-default-where-it-makes-sense"
lang: "en"
translationKey: "stick-to-the-default"
pubDate: 2025-11-24
tags: [ "Architecture", "Engineering" ]
draft: false
---

> TL;DR: Using the defaults is just one way to do it. It's not a silver bullet. You need to be intentional and pragmatic
> from the start. Picking architectures blindly or just because someone said so, is looking for trouble. Defaults
> provide
> convenience. Architecture is about long-term maintainability and scalability.

"You should stick to the default" is not good advice. A better advice would be “You should stick to the default, _where
it makes sense_.”

When I say “defaults,” I mean the standard Laravel MVC folder structure, Eloquent-centric domain logic, and
controller-driven workflows.

Most apps, especially those with one or two core features or simple workflows and limited business complexity, often
B2C, can and should stick to the defaults; however, but even then, you should still be intentional and pragmatic.

While team expertise should be a factor when deciding technologies and architectures, it should not be the driving
one...

You can always find people with expertise on what you are working on, as long as you are not reinventing the wheel and
going with a fully custom “architecture” that only you understand. An architecture that matches your project’s
complexity allows both growth and easier onboarding, it’s not a tradeoff.

Laravel defaults provide a great starting point for any developer at any stage in their career. It makes developing and
launching apps incredibly fast, which is great. For larger projects, the defaults may fall short, and you would want to
avoid this as much as possible. You can get away with naming discipline, conventions, strict team agreements,
documentation; but, once again, you need to evaluate and decide; definitely not sticking to defaults blindly.

While Laravel is opinionated, those defaults are not forced on you, and you can and should pick whichever structure
better fits the project.

### "It's wrong to think in business domains"

The argument says "...that's not how your code works. It works in developer domains like models, views, and
controllers."

Well an `Order` model is a business concern. When you apply rules around the `Order` model, you are essentially applying
business rules.

In software design, _thinking in business domains is exactly what you're supposed to do_. Thinking in business domains
is not about applying Domain Driven Design, it's about thinking in terms of the business problem you're trying to solve.
Got an invoicing application, guess what? Your Invoice needs to be created, posted, sent, paid, voided, etc. Those are
business concepts, not technical ones. How you express them in code is where these architectural decisions come in.

### It's not just about adding features

If you _don't_ think in business domains and plan accordingly, business rules may spread randomly across your codebase,
unless you have clear team discipline, conventions and documentation from the beginning.

Changes in the business ("we now need to support partial payments and refunds") become more difficult to implement
because you have to make changes in multiple places.

### An example

Imagine an “all-in-one” CRM/ERP application that handles Leads, Contacts, Messaging, Knowledge Bases, Billing,
Work Jobs, Telephony, and a bunch of other features. Some of those features are more critical than others, some are more
write/read heavy, some require careful compliance and auditing... you get the idea.

On a Laravel project using the defaults, models are tightly coupled; the Work Jobs domain has knowledge of the Invoice
model structure, properties, relationships, and potentially even business logic.

If the Messaging domain becomes write-heavy and starts increasing the system load, Billing is affected because both
domains are on the same monolith, which is not inherently bad, but using defaults makes moving out parts of the system
difficult.

This same project using a modular monolith with clear boundaries would allow you to evolve the Invoice model without
potentially breaking Work Jobs. You would be able to take the Messaging domain out and put it in its server; still not
trivial to do, but it would be much easier to do when compared to the standard way.

There's so much you can do with a monolithic application that follows the defaults.

A more concrete example is Magento, a big and complex eCommerce platform; it went from a monolithic to a modular
architecture. You would want to ideally minimize these big refactorings and their blast radius as much as possible.

#### Applying proper architectural solutions to known problems

How would I tackle the hypothetical CRM/ERP application mentioned earlier? Separating each domain would be a logical
first step; common solutions for this is the layered architecture and modular monolith.

#### Visual diagram

```vbnet
Default Laravel (tightly coupled):
Controllers → Models → (Shared DB tables & logic)
All domains know each other's models

Modular Monolith:
[Messaging] → API → [Billing]
[Work Jobs] → API → [Invoices]
Each domain owns its own data + logic
```

These two architectures are common in the industry and allow you to keep things simple while still achieving scalability
and maintainability. Definitely they are not the only ones.

Whether to apply Domain Driven Design is a decision you need to make based on your project needs and complexity. You
don't need it to have a proper, scalable, and highly maintainable codebase; but this depends on your project.

#### Decoupling

Each domain must be isolated from the others and only communicate using a public API that each domain exposes. This
decoupling allows you and your team to work on domains without breaking others.

This design also has the inherent benefit of being able to move a feature to its own server (hint: microservices),
should the need arise (rare, but possible in complex projects), without doing a major refactor.

#### Domain model at the core

If you put your model (and I'm not talking about Eloquent models here) at the core of your domain, so it is just plain
code that doesn't depend on the framework or infrastructure (i.e., no database, cache, etc.), testing becomes WAY
easier.

You effectively have a black box that you can test without having to worry about the rest of the application. For me,
this is one of the most important benefits of decoupling your domain model from the rest of the application.

You can still use 100% of the framework features and still create loosely coupled domains/modules; whether you want to
couple each domain/module to the framework or not, it's up to you. For example, you could create a modular monolithic
Laravel application, and each module internally uses Eloquent and all the framework features, but exposes a public API
that other modules can use. Each module essentially becomes a focused mini-Laravel application that only does one thing
well.

## Closing

Software architectures are there to solve specific problems. Identify those problems from the start and choose the right
architecture that makes sense for your project. While most projects can get away with the defaults, it's not always the
case. You need to be intentional and pragmatic from the start. Requirements like comprehensive audit logging, complex
workflows, or strict compliance needs often demand architectural decisions that go beyond the framework's defaults.
Making these decisions early helps avoid painful refactoring later.

More modularity introduces more structure and more decisions. You should only pay that cost when the domain complexity
justifies it.

### Suggested 3-level decision framework

1. Simple app, simple rules, short lifespan → stick to defaults
2. Growing app, evolving business rules → introduce domain boundaries
3. Large, multi-domain, mission-critical → modular monolith + decoupled domain model
