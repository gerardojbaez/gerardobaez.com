---
title: "Quédate con el default cuando tiene sentido"
description: "Cuándo conviene respetar las convenciones del framework y cuándo es mejor ir más allá. Uso Laravel como ejemplo para mostrar los beneficios de los defaults, sus límites y cómo decidir con intención cuándo personalizar."
urlSlug: "quedate-con-el-default-cuando-tiene-sentido"
lang: "es"
translationKey: "stick-to-the-default"
pubDate: 2025-11-24
tags: ["Arquitectura de software"]
draft: false
---

“Sigue siempre el default” no es un buen consejo. Una mejor guía es “Quédate con el default cuando tiene sentido”. Muchas aplicaciones Laravel con una o dos funciones centrales pueden y deberían hacerlo, siempre que la decisión sea intencional y pragmática. Si además es un producto B2C con pocos requisitos especiales, los defaults te llevan lejos. Pero los proyectos con muchos módulos y reglas necesitan algo más que la configuración por defecto.

La experiencia del equipo es un factor, pero no debe dictar la arquitectura. Siempre puedes incorporar a alguien con el contexto adecuado si el diseño es claro y extensible. Un proyecto bien estructurado debería poder crecer y permitir que se sumen nuevas personas sin sufrir. Imagina un CRM/ERP que gestione contactos, mensajería, facturación, telefonía y soporte. Cada área tiene niveles distintos de criticidad, carga y compliance. No hay monolito “default” que aguante eso sin planificación.

Magento es un ejemplo claro: pasó de monolito a arquitectura modular para poder evolucionar. Vale la pena evitar esos refactors gigantes diseñando con anticipación. Si tu audiencia es pequeña, sigue el default. Pero si el producto puede crecer, planea y diseña con cuidado. Elegir arquitectura por moda o por lo que alguien dijo es buscarte un problema.

Los defaults de Laravel son ideales para lanzar rápido y aprender. Aun así, en proyectos grandes se quedan cortos. Puedes apoyarte en convenciones, disciplina de nombres y documentación, pero tarde o temprano necesitarás patrones y módulos. Laravel es opinionado, no restrictivo. Aprovecha todo el framework, solo evita acoplarte ciegamente a la forma “tradicional” de usarlo.

Tampoco necesitas DDD para tener una arquitectura decente. Para el CRM/ERP del ejemplo, dividir cada función en un módulo aislado sería mi primer paso. Cada módulo expone una API pública y se comunica con las demás a través de ella. Ese desacoplamiento permite escalar, mover módulos a otros servicios si hace falta y seguir usando Eloquent sin dolor, solo con más intención. Es diseño pragmático, no rebeldía: la diferencia está en saber cuándo los defaults te ayudan y cuándo empiezan a frenarte.

