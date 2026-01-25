import React from "react";
import {GitHubCalendar} from "react-github-calendar";

const Consistency = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="px-[5%] lg:px-[10%] py-20 text-white">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
        Consistency & Learning Discipline
      </h2>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* GitHub Contributions */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-center">
            GitHub Contributions
          </h3>

          {/* Scroll container */}
          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">
              <GitHubCalendar
                username="sujaypaul27"   // 🔁 change if needed
                year={currentYear}
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                colorScheme="dark"
                showWeekdayLabels
                labels={{
                  totalCount: "{{count}} contributions in {{year}}",
                }}
              />
            </div>
          </div>
        </div>

        {/* LeetCode Practice */}
<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
  <h3 className="text-xl font-semibold mb-4">
    LeetCode Practice
  </h3>

  <img
    src="https://leetcard.jacoblin.cool/sujaypaul27?theme=dark&font=JetBrains%20Mono&ext=heatmap"
    alt="LeetCode Stats - sujaypaul27"
    className="mx-auto rounded-xl max-w-full"
  />

  <a
    href="https://leetcode.com/sujaypaul27/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300 transition"
  >
    View LeetCode Profile →
  </a>
</div>


      </div>
    </section>
  );
};

export default Consistency;
