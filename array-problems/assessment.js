// Given a list of assignments ([{'id':, 'name': , 'parent_id': }]), print them with `-` depending on how many parents they have.

// type Assessment = {
//     id: number;
//     name: string;
//     parentId: number | null;
//   }

// ids -> 1 -> 100000

// const assessments = [
//   { id: 1, name: "Assessment 1", parentId: 2 },
//   { id: 2, name: "Assessment 2", parentId: 6 },
//   { id: 3, name: "Assessment 3", parentId: null },
//   { id: 4, name: "Assessment 4", parentId: 2 },
//   { id: 5, name: "Assessment 5", parentId: 3 },
//   { id: 6, name: "Assessment 6", parentId: null },
// ];

// const calcParent = () => {
//   let hashMap = {};

//   for (let i = 0; i < assessments.length; i++) {
//     if (hashMap[assessments[i].parentId]) {
//       hashMap[assessments[i].parentId]++;
//     } else {
//       if (assessments[i].parentId === null) {
//         hashMap[assessments[i].parentId] = null;
//       } else {
//         hashMap[assessments[i].parentId] = 1;
//       }
//     }
//   }

//   for (let i = 0; i < assessments.length; i++) {
//     console.log(
//       `${"-".repeat(hashMap[assessments[i].parentId])} ${assessments[i].name}`
//     );
//   }
// };

// console.log(calcParent());

// This should print out:
// Assessment 3
// - Assessment 5
// Assessment 6
// - Assessment 2
// -- Assessment 1
// -- Assessment 4

// ?
const assessments = [
  { id: 1, name: "Assessment 1", parentId: 2 },
  { id: 2, name: "Assessment 2", parentId: 6 },
  { id: 3, name: "Assessment 3", parentId: null },
  { id: 4, name: "Assessment 4", parentId: 2 },
  { id: 5, name: "Assessment 5", parentId: 3 },
  { id: 6, name: "Assessment 6", parentId: null },
];

function printAssessments(assessments, parentId, hyphen) {
  assessments
    .filter((item) => item.parentId === parentId)
    .forEach((item) => {
      console.log(`${hyphen} ${item.name}`);
      printAssessments(assessments, item.id, `${hyphen}-`);
    });
}

printAssessments(assessments, null, "");
