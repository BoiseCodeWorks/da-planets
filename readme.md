Da-Planets
==========

***NOTE:*** Take your time building your relationships, Draw them out it will help. 

<img src="http://i.imgur.com/cH6Jk.jpg" alt="space" width="600">

Although it may be the "Final Frontier" but we can still learn a lot from what we already know about SPACE....

Perhaps one of the most difficult problems we face when building software is managing the relationships between objects. Life has almost an immeasurable level of connections and it is this vastness that makes building scalable software tasking. Fortunately most relationships can be describe as one of the following connections. 

- [One to One](https://en.wikipedia.org/wiki/One-to-one_(data_model))
- [One to Many](https://en.wikipedia.org/wiki/One-to-many_(data_model))
- [Many to Many](https://en.wikipedia.org/wiki/Many-to-many_(data_model))

Intelligent software companies will take a careful amount of time planning out these relationships prior to ever writing their first line of code for an application. While it may appear to many as a slow way to start an application having a clear concise plan of these relationships will save countless hours and keyboard headbanging from being the number one cause of death for a developer. 

Real world relationships are complex and often look something like [this](http://boycottnovell.com/wp-content/uploads/2010/02/software-map-with-arrows.png) when brought into code

With all of the complexities involved in building out all of these relationships developers often turn to an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) (Object Relational Mapper).

For our purposes we will use a framework called mongoose. One of the best benefits to an ORM is they provide us with a programmable interface (**not a GUI**) that allows us to write all of our code the same regardless of the type of database that we are storing our information to. This flexibility helps tremendously when developers need to switch between test data and production data.  This quick switching of entire datastores is a small glimpse at one of the [S.O.L.I.D principles of Object Oriented programming](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#dependency-inversion-principle)

###Let’s start mapping

This project has provided the basic starting points of an application to manage Galaxies, I know a big task right. Thinking about the relationships of space you will need to create a service and controller for each celestial body. The type of data that you store on each object is up to you.

Take your time to work on the relationships and the ability to create and read data first. Also take you time to really map out each of the items and try to identify the relationships they have between each other.



###First Steps

- Identify the relationships between each of your schemas

Galaxy -> Star/Planet/Moon/Species

Star -> Galaxy/Planet/Moon/Species

Planet -> Galaxy/Star/Moon/Species

Moon -> Galaxy/Star/Planet/Species

Species -> Galaxy/Star/Planet/Moon // Hint save species for last Many to Many here it gets complicated

- Build your schemas
	- Know what each object is going to look like.
	- Write your methods for `create`, `getAll`, `getOne`
	- Think about what the absolute necessary data needed is to create the object…. Don’t let objects be created if they don’t follow your format. 
	- Remember everything is Async :)

- Get your Test Data in
	- Start with galaxies and stars -> planets -> moons -> species
Good Luck if you get stuck please ask for help.


## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are soley intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

---

## Copyright

© CodeWorks® LLC, 2021. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.


<img src="https://bcw.blob.core.windows.net/public/img/7815839041305055" width="125">
