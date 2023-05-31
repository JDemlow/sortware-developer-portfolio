import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">
            // These are just some of the technologies I've worked with
            professionally
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <img
              className="w-20 mx-auto"
              src="src/assets/css.png"
              alt="CSS icon"
            />
            <p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
