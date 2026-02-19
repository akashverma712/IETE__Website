"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});


const events = [
  {
    name: "Vibe-a-thon",
    img: "/events/vibeathon.png",
    description:
      "An  innovative coding competition focused on developing full-stack projects using AI-driven tools and technologies. Designed and implemented a complete application by integrating frontend, backend, and AI functionalities, gaining hands-on experience in modern development practices. Collaborated with peers, explored creative problem-solving approaches, and learned to effectively leverage AI to enhance productivity and efficiency. The competition strengthened technical, analytical, and teamwork skills while fostering innovation and real-world project development experience.",
    highlights: [
      "300+ Participants",
      "2 Rounds completed",
      "Highly competitive finale",
      "Organized successfully",
    ],
    
  },
  {
    name: "Clue-e-minati",
    img: "/events/clueminati.jpeg",
     description:
      "An  engaging online competition where clues related to a specific character were posted on Instagram handles. Analyzed each clue carefully and used logical reasoning, observation, and research skills to identify the correct answers. The event encouraged quick thinking, attention to detail, and active participation in a competitive and interactive environment. It also enhanced problem-solving abilities and digital engagement through social media-based challenges.",
    highlights: [
      "500+ Participants",
"10+ Character Clues",
"Instagram-based hunt",

"Highest accuracy wins"
    ],
  },
  {
    name: "Nexus 3.0",
    img: "/events/Nexus.jpeg",
     description:
      "Nexus 3.0 was a web development competition focused on designing and building functional, user-friendly, and innovative websites. Participants submitted their developed websites, which were evaluated based on creativity, technical implementation, and overall user experience. The project successfully qualified for the second round, which involved presenting and explaining the website’s features, design choices, and working process. The event emphasized practical application of web development skills, problem-solving, and the ability to effectively communicate technical concepts.",
    highlights: [
      "100+ Website Submissions",
"Campus-level Competition",

"Top Teams Qualified",
"Presentation Round Selection"
    ],
  },
  {
    name: "BGMI Campus Combat",
    img: "/events/bgmi1.jpeg",
     description:
      "BGMI Campus Combat was an exciting esports tournament centered around Battlegrounds Mobile India, bringing together competitive gamers from across the campus. The event tested participants’ strategic planning, teamwork, coordination, and real-time decision-making skills. Teams competed in intense battle rounds, showcasing tactical gameplay and communication under pressure. The tournament fostered a spirit of healthy competition, sportsmanship, and digital gaming excellence among students.",
    highlights: [
      "100+ squads Participated",
"Team-based Competition",
"Strategic Battle Rounds",
"Campus-level Esports",
"High Engagement Event"
    ],
  },
  {
    name: "Tech Udbhav",
    img: "/events/techudbhav.JPG",
     description:
      "Tech Udbhav was a large-scale technical fest that brought together students to explore innovation, technology, and creativity through various competitions and activities. The fest served as a platform to showcase technical skills, exchange ideas, and engage in learning beyond the classroom. It encouraged collaboration, problem-solving, and exposure to emerging technologies and trends. Tech Udbhav fostered enthusiasm for engineering, innovation, and continuous learning among participants.",
    highlights: [
      "500+ Participants",
"5+ Technical Events",
"Campus-wide Participation",
"Multi-domain Competitions",
"Flagship Technical Fest"
    ],
  },
  {
    name: "Workshops",
    img: "/events/workshops.jpg",
     description:
      "A series of technical workshops were conducted to provide hands-on learning and practical exposure to emerging tools and technologies. These sessions focused on enhancing core technical skills, bridging the gap between theoretical knowledge and real-world application. Participants gained valuable insights from mentors and learned industry-relevant concepts through interactive demonstrations and guided practice. The workshops promoted continuous learning, skill enhancement, and technical confidence among students.",
    highlights: [
      "Hands-on Learning Sessions",
"Industry-relevant Topics",
"Expert-led Training",
"Skill Development Focus"
    ],
  },
  {
    name: "Webinars",
    img: "/events/webinar.jpeg",
     description:
      "Webinars were conducted by industry experts and professionals to share valuable insights on emerging technologies, career guidance, and industry trends. These sessions provided an opportunity to learn directly from experienced speakers and understand real-world applications of technical concepts. The webinars enhanced awareness, broadened perspectives, and encouraged continuous learning beyond academic curriculum. They also helped participants stay updated with current advancements and professional opportunities in the tech domain.",
    highlights: [
      "Industry Speaker Talks",
"Emerging Tech Topics",
"Interactive Learning",
"Career Guidance Focus"
    ],
  },
  {
    name: "30 Days Challenge",
    img: "/events/challenge.jpeg",
     description:
      "The 30 Days Coding Challenge focused on solving 90 carefully selected coding questions inspired by problems asked in 16 leading tech companies. This challenge strengthened problem-solving abilities, logical thinking, and consistency through daily practice. It provided exposure to different question patterns and improved understanding of data structures and algorithms. The challenge fostered discipline, persistence, and enhanced coding proficiency for technical growth and interview preparation.",
    highlights: [
      "30 Days Consistency",
"90 Coding Questions",
"16 Company Patterns",
"Daily Problem Solving",
"Interview Preparation Focus"
    ],
  },
  {
    name: "Kreatrix",
    img: "/events/kreatrix.jpeg",
     description:
      "Kreatrix was a creative poster-making competition that encouraged participants to express ideas through visual storytelling and design. The event emphasized originality, clarity of message, and artistic presentation. Participants showcased their creativity by blending colors, typography, and concepts effectively. The competition promoted imagination, aesthetic sense, and the ability to communicate impactful messages through design.",
    highlights: [
     "50+ Creative Entries",
"Design-based Competition",
"Visual Storytelling Focus",
"Campus-wide Participation",
"Creativity Showcase Event"
    ],
    
  },
];


const techUdbhavEvents = [
  {
    name: "Robo Soccer",
    img: "/events/robosoccer.png",
    description:"A football match where the bots compete with each other to make goals instead of real people. The event was transformed by adding balloons and giving points for bursting them.",
  },
  {
    name: "Minefield Rescue",
    img: "/events/minefieldrescue.png",
    description:"Teams develop and control manual bots to navigate a simulated minefield and save hostages. This intense competition unfolds in rounds with diverse challenges, testing precision, strategy, and teamwork under pressure.",
  },
  {
    name: "Cloak Coding",
    img: "/events/cloak coding.png",
    description:"An exciting coding challenge where participants solve the coding questions without looking the desktop screen. In this, participants must depend solely on their coding expertise and mental agility.",
  },
  {
    name: "Tech Trivia",
    img: "/events/techtrivia.png",
    description:"It is a competitive event where participants engage in a fast-paced quiz covering diverse technical subjects like artificial intelligence, programming languages, algorithms, electronics, robotics, and cutting-edge technologies.",
  },
  {
    name: "Innovation Tank",
    img: "/events/innovationtank.png",
    description:"Teams showcase inventive solutions for industrial and environment challenges, reminiscent of the popular show Shark Tank. Participants present their business ideas, highlighting key concepts, market feasibility, and societal or environmental benefits.",

  },
  {
    name: "Cyber Battleground",
    img: "/events/cyberbattleground.png",
    description:"Participants search for hidden flags in diverse forms like code, databases, servers, and encrypted files, requiring a range of expertise to uncover. They engage in a simulated cyber warfare scenario, showcasing their cybersecurity skills to retrieve the flags.",

  },
];


export default function MajorEventsPage() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-x-hidden">

      {/* ================= HERO : MAJOR EVENTS (PRECISE ALIGNMENT) ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">

        {/* SEMICIRCULAR FLASHLIGHT */}
        <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] pointer-events-none">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[80%] h-[85%]
                 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.45),rgba(0,0,0,0)_65%)]"
          />
        </div>

        {/* TEXT */}
        <h1
          className={`${orbitron.className} absolute top-[38%]
             text-[clamp(2.8rem,6vw,4.8rem)]
             tracking-[0.35em] font-semibold z-10`}
        >
          MAJOR EVENTS
        </h1>


        {/* THIN SLAB — ALIGNED TO BLACK DIVIDER LINE */}
        <div
          className="absolute bottom-[3.5rem] w-[70%] h-[0.45rem]
               bg-gradient-to-r
               from-slate-700/40 via-slate-200/40 to-slate-700/40
               shadow-[0_-0.6rem_1.6rem_rgba(0,0,0,0.75)]
               before:absolute before:inset-0
               before:bg-gradient-to-t
               before:from-black/40 before:to-white/10"
        />
      </section>

      {/* ================= THICK STRIP ================= */}
      <section className="w-full py-[1.5rem] bg-white/5 backdrop-blur-md text-center text-white/60 tracking-widest text-sm">
        INNOVATE &nbsp; • &nbsp; THROUGH &nbsp; • &nbsp; TECHNOLOGY
      </section>

      {/* ================= EVENT SLIDER (FIXED) ================= */}
      <section className="py-[1rem]">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[2rem] mb-[4rem]"
        >

        </motion.h2>

        {/* SCROLL AREA */}
        <div className="relative w-full px-[6vw]">
          <div
            className="flex gap-[3rem] overflow-x-auto scrollbar-hide py-[3rem]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >

            {events.map((event, i) => (
              <motion.div
                key={i}
                onHoverStart={() => setActiveEvent(event)}
                className="relative flex-shrink-0 overflow-visible"
              >
                {/* FIXED LAYOUT BOX (never scales) */}
                <div className="w-[18rem] md:w-[20rem] h-[24rem] overflow-visible">

                  {/* VISUAL CARD (scales safely) */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    className="relative w-full h-full rounded-2xl
                         bg-white/10 backdrop-blur-xl
                         shadow-[0_2rem_4rem_rgba(0,0,0,0.65)]
                         hover:shadow-cyan-400/30
                         will-change-transform"
                  >
                    {/* IMAGE */}
                    <img
                      src={event.img}
                      alt={event.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />

                    {/* IMAGE DARK OVERLAY (for readability) */}
                    <div className="absolute inset-0 bg-black/30 rounded-2xl" />


                    {/* REALISTIC GLASS STRIP (FULL WIDTH) */}
                    <div
                      className="absolute bottom-0 w-full  px-[1.2rem] py-[2rem]
                           bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05))]
                           backdrop-blur-1.6xl
                           border-t border-white/30"
                    >
                      <p className="text-center  tracking-wide text-xl font-bold">
                        {event.name}
                      </p>
                    </div>

                  </motion.div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


    {/* ================= EVENT DETAIL PREVIEW ================= */}
<section className="px-[6vw] py-[6rem]">

  <div
  className="grid md:grid-cols-3 gap-6 items-stretch"
  style={{ perspective: "1200px" }}
>


    {/* MAIN CARD — IMAGE + DESCRIPTION */}
    <motion.div
  key={activeEvent.name + "-main"}
  initial={{ opacity: 0, rotateY: -10, x: -40 }}
  animate={{ opacity: 1, rotateY: 0, x: 0 }}
  whileHover={{
    rotateY: 6,
    rotateX: 4,
    scale: 1.03,
  }}
  transition={{ duration: 0.4 }}
  className="md:col-span-2 relative rounded-3xl overflow-hidden
             bg-white/10 backdrop-blur-xl
             border border-white/10
             shadow-[0_10px_40px_rgba(0,0,0,0.6)]
             hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
             will-change-transform"
  style={{ transformStyle: "preserve-3d" }}
>


      {/* IMAGE */}
      <img
        src={activeEvent.img}
        alt={activeEvent.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative p-[3rem] z-10">

        <h3 className="text-[2.5rem] mb-4">
          {activeEvent.name}
        </h3>

        <p className="text-white/80 max-w-[60ch]">
          {activeEvent.description}
        </p>

      </div>

    </motion.div>


    {/* SECOND CARD — EVENT HIGHLIGHTS */}
    <motion.div
  key={activeEvent.name + "-highlights"}
  initial={{ opacity: 0, rotateY: 10, x: 40 }}
  animate={{ opacity: 1, rotateY: 0, x: 0 }}
  whileHover={{
    rotateY: -6,
    rotateX: 4,
    scale: 1.05,
  }}
  transition={{ duration: 0.4 }}
  className="rounded-3xl bg-white/10 backdrop-blur-xl
             p-[2rem]
             border border-cyan-400/20
             shadow-[0_10px_40px_rgba(0,0,0,0.6)]
             hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]
             will-change-transform    flex flex-col items-center justify-center text-center"
  style={{ transformStyle: "preserve-3d" }}
>


      <h4 className="text-xl text-center mb-4 text-cyan-400">
        EVENT HIGHLIGHTS
      </h4>

      <ul className="space-y-2 text-white/80">

        {activeEvent.highlights?.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}

      </ul>

    </motion.div>

  </div>

</section>

      {/* ================= STRIP AGAIN =================*/}
      <section className="w-full py-[1.5rem] bg-white/5 backdrop-blur-md text-center text-white/60 tracking-widest text-sm">
        INNOVATE &nbsp; • &nbsp; THROUGH &nbsp; • &nbsp; TECHNOLOGY
      </section>

      {/* ================= TECH UDBHAV ================= */}
      <section className="relative py-[6rem] overflow-hidden">

        {/* TITLE (3D SLAB STYLE) */}
        <div className="relative min-h-[40vh] flex items-center justify-center mb-[3rem]">


          {/* SEMICIRCULAR FLASHLIGHT */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[120%] h-[120%]">

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2
                   w-[70%] h-[100%]
                   bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.4),rgba(0,0,0,0)_65%)]"
            />
          </div>

          {/* TEXT */}
          <h2
            className={`${orbitron.className} absolute top-[32%]
                 text-[clamp(2.2rem,5vw,4rem)]
                 tracking-[0.35em] font-semibold z-10`}
          >
            TECH UDBHAV
          </h2>

          {/* THIN SLAB */}
          <div
            className="absolute bottom-[1.1rem] w-[70%] h-[0.45rem]
                 bg-gradient-to-r
                 from-slate-700/40 via-slate-200/40 to-slate-700/40
                 shadow-[0_-0.6rem_1.6rem_rgba(0,0,0,0.75)]
                 before:absolute before:inset-0
                 before:bg-gradient-to-t
                 before:from-black/40 before:to-white/10"
          />
        </div>

        {/* ================= TECH UDBHAV SLIDER (REFERENCE STYLE) ================= */}
        <section className="py-[3rem]">

          <div className="relative w-full px-[6vw]">
            <div
              className="flex gap-[3rem] overflow-x-auto scrollbar-hide py-[2.5rem]"
              style={{ WebkitOverflowScrolling: "touch" }}
            >

              {techUdbhavEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="relative flex-shrink-0 overflow-visible"
                  whileHover={{ y: -12 }}
                >
                  <div className="w-[18rem] md:w-[20rem] h-[24rem] overflow-visible">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 180, damping: 15 }}
                      className="relative w-full h-full rounded-2xl overflow-hidden
                   shadow-[0_2rem_4rem_rgba(0,0,0,0.65)]"
                    >
                      {/* IMAGE */}
                      <img
                        src={event.img}
                        alt={event.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/25" />

                      {/* GLASS TITLE STRIP */}
                      <div
                        className="absolute bottom-[40%] left-1/2 -translate-x-1/2
                     w-[100%] py-[0.95rem]
                     bg-white/25
                     backdrop-blur-1.3xl
                     border border-white/30
                     
                     text-center"
                      >
                        <span className="text-sm font-semibold tracking-wide text-white">
                          {event.name}
                        </span>
                      </div>

                      {/* DESCRIPTION BOX */}
                      <div
                        className="absolute bottom-0 w-full h-[40%]
                     bg-gradient-to-t
                     from-slate-800 via-slate-700 to-slate-600
                     px-[1.2rem] flex items-center justify-center text-center"
                      >
                        <p className="text-sm text-white/85 leading-relaxed">
                           {event.description}
                        </p>
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              ))}
</div>
          </div>
        </section>
 </section>
</main>
  );
}


















