const siteData = {
  site: {
    title: "The 2026 Planet Deep South Pop Up",
    subtitle: "Jackson State University",
    date: "Wednesday, September 30, 2026",
    venue: "College of Liberal Arts, Jackson State University",
    city: "Jackson, Mississippi",
    heroImage: "assets/pds-hero-hires.png",
    logoImage: "assets/pds-logo.png",
    logoAlt: "The 2026 Planet Deep South Pop Up logo.",
    johnJenningsImage: "assets/john-jennings.jpg",
    johnJenningsAlt: "Portrait of John Jennings.",
    heroAlt:
      "The 2026 Planet Deep South Pop Up artwork featuring vibrant afrofuturist collage elements and Mississippi cartographic imagery.",
    utilityLinks: [
      { label: "Jackson State University", href: "https://www.jsums.edu/" },
      { label: "College of Liberal Arts", href: "https://www.jsums.edu/liberalarts/" },
      { label: "Contact JSU", href: "https://www.jsums.edu/contact/" }
    ],
    nav: [
      { label: "Home", href: "index.html", page: "home" },
      { label: "Schedule", href: "schedule.html", page: "schedule" },
      { label: "John Jennings", href: "john-jennings.html", page: "john-jennings" },
      {
        label: "Call for Submissions",
        href: "build-your-tiger-world.html",
        page: "build-your-tiger-world"
      },
      { label: "About + Information", href: "about.html", page: "about" }
    ],
    partnerLogos: [
      {
        name: "College of Liberal Arts",
        image: "assets/college-of-liberal-arts-logo.png",
        alt: "College of Liberal Arts logo.",
        lightBackground: true
      },
      {
        name: "Thee Africana Digital Humanities Lab",
        image: "assets/adh-lab-logo.png",
        alt: "Thee Africana Digital Humanities Lab logo."
      }
    ],
    footerLegal: "A public HBCU in Jackson, Mississippi."
  },
  shared: {
    eventOverview: {
      title: "A Day of Black Southern Worldbuilding",
      intro:
        "The 2026 Planet Deep South Pop Up explores the intersections of Black speculative culture, HBCU creativity, visual storytelling, literature, fashion, music, theatre, and the future of the American South.",
      paragraphs: [
        "The day will move from opening remarks into a craft talk with John Jennings, exhibition viewing, a luncheon conversation, a scholarly roundtable, and an evening program shaped by student creativity, readings, performance, and gathering.",
        "The program welcomes scholars, artists, students, educators, alumni, and community guests into a shared conversation about Black speculative futures."
      ]
    },
    artistShort: [
      "John Jennings is an award-winning artist, graphic novelist, designer, curator, scholar, and educator whose work explores Black speculative culture, comics, Afrofuturism, horror, visual storytelling, and the politics of representation.",
      "As part of The 2026 Planet Deep South Pop Up, Jennings will present an illustrated craft talk on comics, adaptation, worldbuilding, design, and the Black Southern imagination."
    ],
    collaborationAreas: [
      "Art",
      "English and Modern Languages",
      "Creative Writing",
      "Fashion Design",
      "Music",
      "Theatre",
      "History",
      "Africana Studies",
      "Digital Humanities",
      "Media and Communication"
    ]
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Jackson State University",
        title: "The 2026 Planet Deep South Pop Up",
        summary:
          "A one-day convening bringing together art, scholarship, creative practice, and Black speculative futures.",
        shortIntro:
          "Join a full day of conversation, exhibition viewing, scholarly exchange, and evening performance anchored by John Jennings and the wider community gathered through The 2026 Planet Deep South Pop Up.",
        primaryButton: { label: "View the Schedule", href: "schedule.html" },
        signupButton: {
          label: "Sign Up",
          href: "https://form.jotform.com/262326200071139"
        },
        secondaryButton: { label: "Explore John Jennings", href: "john-jennings.html" },
        tertiaryLink: null,
        chips: []
      },
      highlights: [
        {
          title: "Scholarly Roundtable",
          body:
            "Scholars and invited guests connect research, creative practice, and the broader questions at the center of The 2026 Planet Deep South Pop Up."
        },
        {
          title: "Call for Submissions",
          body:
            "Participants across visual art, writing, fashion, music, theatre, comics, and interdisciplinary media present speculative work shaped by Black Southern futures."
        },
        {
          title: "Readings and Performance",
          body:
            "The evening program features literary and performative work, including readings and a dramatic monologue."
        },
        {
          title: "John Jennings Installation",
          body:
            "A special installation introduces audiences to Jennings's visual practice, comics, speculative worlds, and Black cultural production."
        },
        {
          title: "Comic Book Signing",
          body:
            "Following the featured talk, John Jennings signs a selection of books and graphic novels."
        },
        {
          title: "Tiger Futures",
          body:
            "The evening gathering highlights student creativity and opens into readings, performance, music, and conversation."
        }
      ]
    },
    schedule: {
      pageHeader: {
        eyebrow: "The 2026 Planet Deep South Pop Up",
        title: "Schedule",
        intro:
          "A full day moving from welcome and craft talk to scholarly exchange, then into Tiger Futures, readings, and the evening reception.",
        note: "Schedule subject to change."
      },
      overview: [
        {
          title: "Talks and Day Program",
          body: "Opening remarks, the craft talk, book signing, exhibition viewing, and the scholarly roundtable take place in College of Liberal Arts Room 166."
        },
        {
          title: "Evening Program",
          body: "Tiger Futures, readings, performance, and the reception with music take place in the Johnson Hall Art Gallery."
        }
      ],
      items: [
        {
          time: "10:00 a.m.",
          title: "Opening Remarks and Welcome",
          description: [
            "An introduction to The 2026 Planet Deep South Pop Up, the ideas shaping the convening, and the day’s program."
          ],
          location: "College of Liberal Arts, Room 166"
        },
        {
          time: "11:00 a.m.",
          title: "Craft Talk with John Jennings",
          description: [
            "Artist, scholar, and writer John Jennings discusses his creative practice, storytelling, and the ideas that inform his work."
          ],
          location: "College of Liberal Arts, Room 166",
          meta: ["Featured speaker: John Jennings"]
        },
        {
          time: "12:00 p.m.",
          title: "Book Signing and Exhibition Viewing",
          description: [
            "Meet John Jennings during a book signing and spend time exploring the accompanying exhibition."
          ],
          location: "College of Liberal Arts, Room 166"
        },
        {
          time: "1:00-2:30 p.m.",
          title: "Lunch Break",
          description: [
            "A break in public programming for attendees to enjoy lunch on their own and explore nearby dining options."
          ],
          location: "Lunch on your own"
        },
        {
          time: "3:00-3:50 p.m.",
          title: "Scholarly Roundtable",
          description: [
            "Scholars and invited guests come together for a focused discussion connecting research, creative practice, and the broader questions explored throughout the convening."
          ],
          location: "College of Liberal Arts, Room 166"
        },
        {
          time: "3:50-5:30 p.m.",
          title: "Afternoon Break",
          description: [
            "A pause between the daytime convening and the evening program."
          ],
          location: "Break between venues"
        },
        {
          time: "5:30 p.m.",
          title: "Doors Open for Tiger Futures",
          description: [
            "Guests are invited to arrive and gather ahead of the evening program."
          ],
          location: "Johnson Hall Art Gallery"
        },
        {
          time: "6:00 p.m.",
          title: "Tiger Futures",
          description: [
            "An interdisciplinary evening program highlighting student creativity and imagining possible futures through art, fashion, performance, and storytelling."
          ],
          location: "Johnson Hall Art Gallery"
        },
        {
          time: "6:30 p.m.",
          title: "Readings and Performance",
          description: [
            "An evening presentation featuring literary and performative work, including readings and a dramatic monologue."
          ],
          location: "Johnson Hall Art Gallery"
        },
        {
          time: "Following the program",
          title: "Reception and Student Music",
          description: [
            "Continue the conversation with music, refreshments, and an informal gathering with convening participants and guests."
          ],
          location: "Johnson Hall Art Gallery"
        },
        {
          time: "7:30 p.m.",
          title: "Program Concludes",
          description: [
            "The public program comes to a close for the evening."
          ],
          location: "Johnson Hall Art Gallery"
        }
      ]
    },
    "john-jennings": {
      pageHeader: {
        eyebrow: "Featured Artist",
        title: "John Jennings",
        intro: "Artist, graphic novelist, designer, curator, scholar, and educator."
      },
      biography: [
        "John Jennings is an award-winning artist, graphic novelist, designer, curator, scholar, and educator whose work explores Black speculative culture, comics, Afrofuturism, horror, visual storytelling, and the politics of representation.",
        "His creative and scholarly practice examines how images, stories, characters, and imagined worlds can recover suppressed histories, confront the present, and create new possibilities for the future.",
        "Jennings is widely recognized for his work on graphic adaptations of Octavia E. Butler's novels, including Kindred and Parable of the Sower, as well as for his contributions to Black comics, publishing, design, visual culture, and speculative storytelling.",
        "His work brings together illustration, collage, typography, graphic narrative, cultural criticism, and worldbuilding."
      ],
      program: {
        title: "Drawing the Future South",
        subtitle: "A Craft Talk with John Jennings",
        paragraphs: [
          "As part of The 2026 Planet Deep South Pop Up, John Jennings will present an illustrated craft talk on comics, visual storytelling, adaptation, speculative design, and the Black Southern imagination.",
          "The talk leads into exhibition viewing and a public book signing before the afternoon and evening programs continue."
        ],
        topics: [
          "Comics and sequential storytelling",
          "Character and environment design",
          "Afrofuturism and Black speculative culture",
          "Horror and the Black imagination",
          "Literary adaptation",
          "Collage, remix, and typography",
          "History and cultural memory",
          "Building a sustainable creative practice",
          "The role of HBCUs in future-facing art and scholarship"
        ]
      },
      works: [
        "Kindred: A Graphic Novel Adaptation",
        "Parable of the Sower: A Graphic Novel Adaptation",
        "Parable of the Talents: A Graphic Novel Adaptation",
        "Additional titles to be announced"
      ],
      signing: [
        "John Jennings will sign books immediately following his featured craft talk.",
        "Books will be available for purchase through the event's designated bookselling partner.",
        "Signing procedures, available titles, and purchase information will be posted before the event."
      ]
    },
    "build-your-tiger-world": {
      pageHeader: {
        eyebrow: "Call for Submissions",
        title: "The 2026 Planet Deep South Pop Up Submissions",
        intro:
          "The 2026 Planet Deep South Pop Up invites current Jackson State University students to imagine the future through creative work rooted in JSU, Jackson, and the wider Black South."
      },
      prompt: [
        "This call asks current Jackson State University students to imagine the future and the future of what it means to be a JSU student.",
        "What might Jackson State look, sound, or feel like years from now? What traditions, struggles, dreams, styles, communities, and ways of learning will shape that future?",
        "Submissions may take the form of visual art, multimedia work, or written work that can be shared, staged, or performed during the evening reception program."
      ],
      forms: [
        {
          title: "Artworks and Multimedia",
          body:
            "Submit visual art, digital work, comics, illustration, collage, photography, installation concepts, moving-image work, sound-based work, or other multimedia projects connected to Black speculative futures. Students may submit up to 5 visual or multimedia works."
          ,
          details: [
            "You may submit up to 5 visual or multimedia works.",
            "Visual submissions may include up to 5 images and up to 3 media files.",
            "Time-based media should not exceed 5 minutes in length.",
            "Multimedia submissions should include any relevant display, installation, or technical notes."
          ]
        },
        {
          title: "Written Work for Performance",
          body:
            "Submit poetry, short prose, speculative scenes, dramatic monologues, spoken-word pieces, or other written work that could be performed or read during the evening reception program. Students may submit up to 3 written works."
          ,
          details: [
            "You may submit up to 3 written works.",
            "Poetry submissions may include up to 3 poems.",
            "Prose, scripts, and monologues should not exceed 2,000 words."
          ]
        }
      ],
      guidelines: [
        "This call is open to current Jackson State University students only.",
        "Work should connect in some way to the future of Jackson State, student life, Black speculative futures, Southern imagination, cultural memory, or future-facing storytelling.",
        "Visual and multimedia submissions are due by Friday, September 18, 2026.",
        "Written submissions are due by Monday, September 21, 2026.",
        "Physical works must be dropped off in the gallery on Monday, September 21, 2026.",
        "Submissions must be complete works ready for review.",
        "Please review the category-specific requirements below before submitting."
      ],
      presentation: [
        "Accepted visual and multimedia work may be displayed during The 2026 Planet Deep South Pop Up and may be presented or featured during the evening reception program.",
        "Accepted written work may be invited into the evening readings, performance, or reception program connected to Tiger Futures.",
        "Final presentation format will depend on space, time, and technical feasibility."
      ],
      submissionItems: [
        "Name",
        "Email address",
        "Project title",
        "Submission category",
        "Short artist or writer statement",
        "Brief description of the work",
        "File upload, sample, image set, or documentation",
        "Technical or installation needs, if applicable"
      ],
      submit: {
        label: "Submit Your Work",
        href: "https://form.jotform.com/262326471510046"
      },
      notes: [
        "Individual and collaborative submissions by current Jackson State University students are welcome.",
        "Please submit complete works that are ready for review.",
        "Please keep image sets, media uploads, and written work within the stated limits so submissions can be reviewed fairly.",
        "Please plan around the separate submission deadlines for visual and written work, and note that physical works must be delivered on Monday, September 21, 2026.",
        "Questions about submissions may be directed to The 2026 Planet Deep South Pop Up organizing team at theeadhlab@gmail.com."
      ],
      review: [
        "Submissions will be reviewed for thematic fit, clarity, creative strength, and feasibility within the event format.",
        "A smaller number of accepted works will be invited for presentation as part of The 2026 Planet Deep South Pop Up, including possible presentation during the evening reception."
      ],
      contactItems: [
        "Email address",
        "Project title",
        "Submission materials or work sample"
      ]
    },
    about: {
      pageHeader: {
        title: "About + Information",
        intro:
          "The 2026 Planet Deep South Pop Up is a platform for Black speculative thought, creative practice, scholarship, and Southern worldbuilding. Here is the core background and visitor information for the 2026 convening."
      },
      sections: [
        {
          id: "origins",
          eyebrow: "Origins",
          title: "A Jackson State University Legacy",
          paragraphs: [
            "The 2026 Planet Deep South Pop Up was developed through creative and intellectual collaboration at Jackson State University.",
            "From its beginning, the project has brought together artists, scholars, writers, designers, technologists, and students to examine how Black communities imagine the future from the cultural, historical, and geographic realities of the Deep South.",
            "The 2026 Planet Deep South Pop Up places HBCUs at the center of conversations about Afrofuturism, speculative art, technology, cultural memory, and future-making."
          ]
        },
        {
          id: "purpose",
          eyebrow: "Purpose",
          title: "Why The 2026 Planet Deep South Pop Up Matters",
          paragraphs: [
            "Too often, conversations about futurism and emerging technology overlook the histories, knowledge systems, and creative practices of Black Southern communities.",
            "The 2026 Planet Deep South Pop Up creates a space for those communities to define the future on their own terms."
          ],
          bullets: [
            "Recover history",
            "Protect cultural memory",
            "Confront present challenges",
            "Envision new social possibilities",
            "Build more just and creative futures"
          ]
        },
        {
          id: "2026-program",
          eyebrow: "2026 Program",
          title: "The 2026 Planet Deep South Pop Up",
          paragraphs: [
            "The 2026 Planet Deep South Pop Up returns to Jackson for a focused day of art, scholarship, exchange, and evening performance.",
            "The program includes opening remarks, a craft talk with John Jennings, exhibition viewing, a luncheon conversation, a scholarly roundtable, Tiger Futures, readings, performance, and a closing reception with music."
          ]
        },
        {
          id: "collaboration",
          eyebrow: "Collaboration",
          title: "Across the Arts and Humanities",
          paragraphs: [
            "The 2026 Planet Deep South Pop Up is designed as an interdisciplinary program connecting artists, scholars, students, and educators across the visual and performing arts, humanities, design, digital media, and cultural studies."
          ],
          bullets: [
            "Art",
            "English and Modern Languages",
            "Creative Writing",
            "Fashion Design",
            "Music",
            "Theatre",
            "History",
            "Africana Studies",
            "Digital Humanities",
            "Media and Communication"
          ]
        },
        {
          id: "location",
          eyebrow: "Date and Location",
          title: "Plan Your Visit",
          paragraphs: [
            "Wednesday, September 30, 2026",
            "College of Liberal Arts, Jackson State University, 1400 John R. Lynch Street, Jackson, Mississippi 39217",
            "Talks, the craft talk, exhibition viewing, and the scholarly roundtable take place in College of Liberal Arts Room 166. The evening program and reception take place in the Johnson Hall Art Gallery."
          ]
        },
        {
          id: "admission",
          eyebrow: "Registration",
          title: "Register to Attend",
          paragraphs: [
            "The 2026 Planet Deep South Pop Up is free and open to attendees.",
            "Use the registration form below to sign up for the convening."
          ],
          registrationEmbed: true
        },
        {
          id: "visit-details",
          eyebrow: "Visitor Notes",
          title: "Arrival, Access, and Contact",
          paragraphs: [
            "Visitor parking instructions, recommended entrances, and event check-in information will be posted before the event. Guests should allow additional time for parking and arrival.",
            "Guests who require accommodations should contact The 2026 Planet Deep South Pop Up organizing team in advance.",
            "For questions about programming, participation, accessibility, partnerships, or media inquiries, email theeadhlab@gmail.com."
          ]
        },
        {
          id: "reception",
          eyebrow: "Evening Program",
          title: "Tiger Futures",
          paragraphs: [
            "Tiger Futures opens the evening portion of The 2026 Planet Deep South Pop Up in the Johnson Hall Art Gallery with student-centered creative work, followed by readings, performance, and an informal reception with music.",
            "Guests are welcome to arrive for the full day or join the evening program, and creative attire is welcome but not required."
          ]
        }
      ]
    }
  }
};
