import instructor from '../../assets/instructor.json';
import Spacing from '../../components/Spacing';

function Instructor() {
  return (
    <div className="main-container">
      <h4>강사 소개</h4>

      <Spacing size={50} />

      <div className="flex flex-col gap-8">
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
