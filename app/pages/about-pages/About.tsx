import SecondaryHeader from "@/app/common-components/headers/SecondaryHeader";

function About() {
  return (
    <div className="relative mt-80 w-4/5 m-auto h-fit">
      <SecondaryHeader headerContent={"ABOUT ME"} />
      <div className="mx-auto mt-10 w-3/4 text-center font-medium text-lg">
        Graduated as a Software Engineer at FPT University. With two years in
        development, I have experience handling asynchronous in JavaScript,
        working with React, and TypeScript, and applying Design Patterns while
        developing. I am currently aiming for senior development level in the
        next 3 years and technical lead or team lead in the next 10 years.
      </div>
    </div>
  );
}

export default About;
