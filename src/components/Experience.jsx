// import React from 'react'

function Experience() {
  return (
    <div className="md:mt-[15px] mt-[10px]">
      <div id="MoveUpBD">
        <h1 className="text-[30px] md:text-[42px] text-[#2ecc71] pb-1">Full Stack Developer<span className="text-[10px]">since january, 2024</span></h1>
        <h3 className='text-[white] text-[22px] font-bold'>Zeeon – Gulshan 1, Dhaka</h3>
        <h2 className="text-[#2ecc71] text-[18px]">Technology: [ Django, React, Tailwind CSS, Django-Rest-Framework, PostgreSQL ]</h2>
        <ul className="list-disc pl-5 pt-2 text-[white]">
          <li className="p-1">Create Full stack websites using django and react.</li>
          <li className="p-1">Implement robust unit testing strategies to ensure the quality and reliability of code.</li>
          <li className="p-1">Write clean, efficient, and reusable code following best practices.</li>
          <li className="p-1">Participate in presenting projects to the clients.</li>
        </ul>
      </div>

      <div id="Repliq" className="mt-[40px]">
        <h1 className="text-[30px] md:text-[42px] text-[#2ecc71] pb-1">Jr. Backend Developer<span className="text-[10px]">May-December 2023</span></h1>
        <h3 className='text-[white] text-[22px] font-bold'>Repliq Limited – Lalmatia, Dhaka</h3>
        <h2 className="text-[#2ecc71] text-[px]">Technology: [ Django, Django-Rest-Framework, Celery, Redis, SQL ]</h2>
        <ul className="list-disc pl-5 text-[white] pt-2">
          <li className="p-1">Create and manage databases and schemas.</li>
          <li className="p-1">Implement robust unit testing strategies to ensure the quality and reliability of code.</li>
          <li className="p-1">Expertise in Test-Driven Development (TDD) by writing test cases before developing new features.</li>
          <li className="p-1">Write clean, efficient, and reusable code following best practices.</li>
          <li className="p-1">Other than work, always contributing to mentoring junior engineers and interns.</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
