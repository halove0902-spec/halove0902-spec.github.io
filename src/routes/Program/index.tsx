import Spacing from '../../components/Spacing';

function program() {
  return (
    <div className="main-container">
      <div>
        <h3>치료프로그램</h3>
        <ul className="text-xl">
          <li>
            <a href="#bibliotherapy">1. 독서치료</a>
          </li>
          <li>
            <a href="#PCIT">2. PCIT</a>
          </li>
        </ul>
      </div>

      <Spacing size={50} />

      <div id="bibliotherapy" className="flex flex-col gap-8">
        <div>
          <h4>1. 독서치료(Bibliotherapy)</h4>
          <div>
            성인 대상 문학 작품(고전·소설·에세이)을 활용해 성인이 감정·사고·관계
            패턴을 이해하고 정리하도록 돕는 상담치료 기법 중 하나입니다.
          </div>

          <div>
            이야기 속 인물과 서사를 통해 자연스럽게 자신을 돌아보고, 감정과 문제
            상황을 다른 시각에서 바라볼 수 있게 해줍니다.
          </div>
        </div>

        <div>
          <h5>- 독서치료의 장점</h5>
          <ul className="list-disc ms-5">
            <li>감정과 생각을 안전하게 정리할 수 있습니다.</li>
            <li>자기 이해가 깊어져 관계·행동 패턴 파악이 쉬워집니다.</li>
            <li>
              문학 속 인물과의 동일시를 통해 감정 표현이 자연스러워집니다.
            </li>
            <li>
              복잡한 감정을 언어화하기 쉬워져 정서적 정돈 효과가 있습니다.
            </li>
            <li>장기적인 진행 시 가치관·관점 변화에 도움됩니다.</li>
            <li>상담이 직접적으로 느껴질 때보다 부담이 적습니다.</li>
          </ul>
        </div>

        <div>
          <h5>- 치료 대상(성인)</h5>
          <ul className="list-disc ms-5">
            <li>감정 정리·정서 안정이 필요한 사람</li>
            <li>반복되는 관계 패턴에 고민이 있는 사람</li>
            <li>자신의 가치·방향성을 점검하고 싶은 사람</li>
            <li>내면을 깊이 들여다볼 준비가 된 성인</li>
            <li>감정 표현이 낯설거나 어려운 사람</li>
            <li>스스로 성찰하는 시간을 갖고 싶은 사람</li>
          </ul>
        </div>

        <div>
          <h5>- 치료 기간</h5>
          <ul className="list-disc ms-5">
            <li>권장: 6개월 ~ 1년행</li>
            <li>다루는 주제·개인의 속도에 따라 조정 가능</li>
          </ul>
        </div>

        <div>
          <h5>- 이런 경우에 적합합니다.</h5>
          <ul className="list-disc ms-5">
            <li>직접적인 상담은 부담스럽지만 이야기는 편하게 다가올 때</li>
            <li>감정·생각이 복잡해 정리가 잘 안 될 때</li>
            <li>타인의 이야기를 통해 자신을 보는 방식이 익숙한 사람</li>
            <li>자신의 감정과 삶을 말로 풀어내는 것이 도움이 되는 사람</li>
            <li>
              삶의 전환기(직장 변화, 관계 변화, 정체성 고민 등)에 있는 사람
            </li>
          </ul>
        </div>

        <div>
          <h5>- 치료 과정</h5>
          <ul className="list-decimal ms-5 flex flex-col gap-3">
            <div>
              <li>초기 면담</li>
              <ul className="list-disc list-inside">
                <li>고민 주제, 감정 패턴, 독서 성향 파악</li>
              </ul>
            </div>

            <div>
              <li> 개인 맞춤 도서 선정 (고전·문학·에세이 중심)</li>
            </div>

            <div>
              <li> 읽기 전 질문</li>
              <ul className="list-disc list-inside">
                <li> 현재 상태·기대·필요 파악</li>
              </ul>
            </div>

            <div>
              <li> 읽은 후 탐색 대화</li>
              <ul className="list-disc list-inside">
                <li>동일시와 거부감 분석</li>
              </ul>
            </div>

            <div>
              <li> 자신과 연결하기</li>
              <ul className="list-disc list-inside">
                <li> 현재 문제·관계·패턴과의 연결 </li>
                <li> 새로운 관점 찾기 </li>
              </ul>
            </div>

            <div>
              <li> 감정 정리 → 생각 구조화 → 방향성 회복</li>
              <ul className="list-disc list-inside">
                <li>생활 적용 전략</li>
              </ul>
            </div>

            <div>
              <li> 실제 상황에서 시도할 수 있는 작은 변화 제안</li>
            </div>

            <div>
              <li>종결 및 정리</li>
              <ul className="list-disc list-inside">
                <li> 변화된 부분 확인, 앞으로의 유지 계획 설정</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <div id="PCIT" className="flex flex-col gap-8 mt-20">
        <div>
          <h4>2. PCIT(Parent-Child Interaction Therapy)</h4>
          <div>
            말 그대로 부모와 자녀 간의 긍정적이고 건강한 관계를 형성함으로써
            부모의 양육태도와 저녀의 문제행동을 개선하는 상담치료기법 중
            하나입니다.
          </div>

          <div>
            미국 플로리다대학교의 Sheila Eyberg 박사가 창시한 부모 코칭 기법으로
            미국에서 가장 영향력 있는 치료기법 중 하나입니다.
          </div>
        </div>

        <div>
          <h5>- PCIT의 장점</h5>
          <ul className="list-disc ms-5">
            <li>
              공격적 행동, 반항, 주의력 부족 등과 같은 문제행동을 효과적으로
              다루는데 도움을 줍니다.
            </li>
            <li>
              부모와 자녀 간 상호작용을 개선하여 가족 간의 갈등을 감소시킵니다.
            </li>
            <li>
              부모가 자녀를 더 효과적으로 양육할 수 있는 능력을 키워줍니다. 이는
              부모의 자신감을 높여줍니다.
            </li>
            <li>
              가족의 삶의 질을 향상시키는 데 도움을 줄 뿐만 아니라, 아동의
              사회적, 정서적 발달에도 긍정적인 영향을 미칠 수 있습니다.
            </li>
          </ul>
        </div>

        <div>
          <h5>- 치료 대상</h5>
          <ul className="list-disc ms-5">
            <li>부모가 어떻게 대응해야 할지에 대한 지도가 필요한 경우</li>
            <li>
              부모와 자녀가 감정을 건강하게 표현하고 관리하는 방법을 배우기를
              원할 때
            </li>
            <li>자녀의 행동이 일상생활에 부정적인 영향을 미칠 때</li>
            <li>
              부모와 자녀가 서로를 이해하고 상호작용하는 방법을 개선하려는 경우
            </li>
            <li>
              가정 내에서 건강한 부모-자녀 간 상호작용을 구축하고자 하는 경우
            </li>
          </ul>
        </div>

        <div>
          <h5>- 치료 기간</h5>
          <ul className="list-disc ms-5">
            <li>권장: 주1회 총 12~15주</li>
          </ul>
        </div>

        <div>
          <h5>- 치료 과정</h5>
          <ul className="list-decimal ms-5 flex flex-col gap-3">
            <div>
              <li>1회기 : 초기 면담</li>
              <ul className="list-disc list-inside">
                <li>
                  부모와의 면담을 통해 아동의 문제행동을 평가하고, 부모가 가장
                  불편함을 느끼는 핵심 증상을 치료목표로 설정합니다
                </li>
              </ul>
            </div>

            <div>
              <li> 2~5회기 : CDI(Child-Directed Interaction)단계</li>
              <ul className="list-disc list-inside">
                <li>
                  아동이 주도하는 놀이를 통해 부모는 자녀와의 상호작용에서 더
                  효과적인 소통 기술을 배우고, 자녀의 긍정적인 행동을
                  강화합니다.
                </li>
              </ul>
            </div>

            <div>
              <li> 6~10회기 : PDI(Parent-Directed Interaction)단계</li>
              <ul className="list-disc list-inside">
                <li>
                  부모가 주도하는 놀이를 통해 부모는 규칙과 한계를 설정하고 이를
                  일관되게 적용하는 방법을 배웁니다. 이는 자녀의 문제행동을
                  관리하고 제한하는 데 도움을 줍니다.
                </li>
              </ul>
            </div>
            <div>
              <li> 11~최종회기 : 종결 및 졸업</li>
              <ul className="list-disc list-inside">
                <li>
                  DPICS(Dyadic Parent-Child Interaction Coding System)를
                  실시하여 10/10/10 조건을 만족하면 프로그램을 종결하고 졸업
                  파티를 진행합니다. 부모는 배운 기술을 일상생활에 적용하며
                  지속적으로 연습합니다.
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default program;
