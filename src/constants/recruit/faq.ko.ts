import { RECRUIT } from "./recruit.ko";

const FAQ = [
  {
    TYPE: "qualification",
    TITLE: "지원 자격",
    DATA: [
      {
        Q: "4학년인데 지원 가능한가요?",
        A: "지원 가능합니다.\n다만 3학기 이상 활동 할 수 있어야 합니다.",
      },
      {
        Q: "프로젝트 경험이 없어도 가능한가요?",
        A: "지원 가능합니다. 에코노베이션은 경험이 많은 사람보다 열정이 많은 사람을 원합니다.\n에코노베이션에 들어와 프로젝트 경험을 쌓아보세요.",
      },
      {
        Q: "실력이 뛰어나야만 참여할 수 있나요?",
        A: "아닙니다. 에코노베이션은 협업을 통해 참여자의 실력을 향상시키는 것 또한 목표하고 있습니다.\n자신의 실력이 뛰어나지 않더라도 성장하고픈 마음이 있다면 얼마든지 참여할 수 있습니다.",
      },
      {
        Q: "여수 캠퍼스 학생인데, 지원할 수 있나요?",
        A: "지원 가능합니다.\n에코노베이션은 여수 캠퍼스 학생이 포함되어 있습니다.",
      },
      {
        Q: "직군간 중복지원이 가능한가요?",
        A: "중복 지원은 불가능합니다.\n에코노베이션에는 자신이 하고 싶은 것에 대한 확신이 있는 사람이 필요하기 때문에 중복지원은 불가능합니다.",
      },
      {
        Q: "지원 결과는 언제 어디서 확인 가능한가요?",
        A: "지원 결과는 지원 마감일로부터 일주일 정도 후에 지원서에 써준 메일로 안내드리며,\n메일이 발송 되었다는 문자를 보내드립니다.",
      },
      {
        Q: "지원 전에 꼭 알아두어야 할 사항이 있나요?",
        A: " 에코노베이션은 열정을 가지고 3학기 이상 활동할 분을 찾고 있습니다. 또한 매주 금요일 17시 주간 발표 및 한 학기의 마무리 활동인 DEV 행사(7월 말, 1월 말)는 필수적으로 참여해야 합니다.",
      },
    ],
  },
  {
    TYPE: "interview",
    TITLE: "면접 관련",
    DATA: [
      {
        Q: "면접은 어떻게 진행되나요?",
        A: "지원자 분이 작성하신 지원서를 기반으로 몇 가지 질문을 드리며,\n에코노베이션의 가치관과 맞는 분인지 알아보기 위한 질문 또한 드리고 있습니다.",
      },
      {
        Q: "면접 일정을 조정하고 싶은데, 가능할까요?",
        A: "에코노베이션 카카오톡 오픈채널에 문의하시면 조정이 가능한지 알려드립니다.",
      },
      {
        Q: "면접 결과는 언제 받아볼 수 있나요?",
        A: `에코노베이션 ${RECRUIT.GENERATION}기 면접 결과는 ${
          new Date(RECRUIT.ANNOUNCE_DATE).getMonth() + 1
        }월 ${new Date(
          RECRUIT.ANNOUNCE_DATE
        ).getDate()}일 중으로 메일을 통해서 개별 공지될 예정입니다. 면접 결과 발표시 문자로 메세지를 보내드릴 예정이오니 문자와 메일 확인에 신경 써주시길 부탁드립니다.`,
      },
    ],
  },
  {
    TYPE: "activities",
    TITLE: "활동 관련",
    DATA: [
      {
        Q: "한 학기 프로젝트는 어떻게 진행되나요?",
        A: "인프로젝트 팀은 A팀(기존 활동 멤버)과 B팀(신입 멤버)로 이루어져 있으며 A팀은 팀빌딩 세션을 통해 팀을 구성하고 B팀은 신입기수 선발과 함께 기존 활동 멤버들의 논의를 통해 팀빌딩을 해드립니다.\n각 팀은 한 학기 동안 진행하고 싶은 프로젝트를 결정하고 DEV(개발 성과 공유회)에서 발표하는 것을 목표로 개발을 진행합니다.",
      },
      {
        Q: "동아리 활동 기간은 어떻게 되나요?",
        A: "3학기 활동을 기본으로 하고 있으며(연속적이지 않아도 됩니다.),\n3학기 활동이 채워지면 수료 멤버로 활동 구분을 변경 할 수 있습니다.",
      },
      {
        Q: "주간 발표는 어떻게 진행되나요?",
        A: "A팀, B팀 발표로 나누어져 한 주씩 진행되며 프로젝트의 진행 상황, 프로젝트를 진행하며 부딪쳤던 어려움과 해결 방법에 대한 내용, 해당 과정을 거치며 얻었던 부분 그리고 자신이 공부한 내용에 대해 공유합니다.",
      },
      {
        Q: "에코노베이션에 들어가면 주로 어떤 활동을 하게되나요?",
        A: "에코노베이션은 매 학기 한 가지 주제를 가지고 실제 동작하는 서비스를 구현하는 프로젝트를 진행 합니다. 프로젝트를 진행할 뿐만 아니라 의무적으로 매주 금요일에 모여 주간발표시간을 가집니다. 한 학기 동안 진행한 프로젝트는 DEV 행사에서 성과를 공유합니다.",
      },
      {
        Q: "프로젝트팀은 어떻게 구성하나요?",
        A: "첫 학기에는 지원하는 분야에 맞추어서 팀이 배정됩니다. 다음 학기부터는 '팀 빌딩 세션'을 통해 각자 관심 있는 분야에 대해 이야기를 나누고, 의견이 맞는 동아리원들이 모여 팀을 꾸리게 됩니다.",
      },
      {
        Q: "에코노베이션은 학술활동만 하는 동아리인가요?",
        A: "에코노베이션은 IT에 관심이 있는 사람들이 모인 커뮤니티입니다. 개발 프로젝트를 진행할 뿐만 아니라 회원들 간의 친목을 유지하기 위해서 핼러윈 파티, 야유회 등 다양한 행사를 기획하고 운영하고 있습니다.",
      },
      {
        Q: "회원 분류 제도가 있나요?",
        A: "에코노베이션 회원은 AM, RM, CM으로 분류됩니다. AM(Active Member) 은 현 학기에 프로젝트를 수행하는 회원을 말합니다. RM(Rest Member)은 3학기 프로젝트를 이수하지 않았지만, 개인의 선택으로 인해 현 학기 동안에만 프로젝트를 수행하지 않는 회원을 말합니다. CM(Complete Member)은 3학기 프로젝트를 모두 이수한 회원을 말합니다.",
      },
    ],
  },
];

export { FAQ };
