import instructor from '../../assets/instructor.json';

function Instructor() {
  return (
    <div className="main-container">
      <div className="flex flex-col gap-8">
        <h4>강사 소개</h4>

        {instructor.map((item) => (
          <>
            <p className="pe-6">
              <span className="font-semibold text-black">{item.name}</span>
              <span className="text-black">{` 강사 | `}</span>

              {item.desc}
            </p>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default Instructor;
