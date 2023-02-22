let column_1=[9,5,8,6,9,6,1,4,9,5,2,6,9,1,7,1,2,10,4,9,4,4,7,10,5,10,8,6,9,7];
let column_2=[9,6,3,9,7,9,4,9,3,7,3,7,6,5,7,1,5,4,6,5,7,8,1,7,2,10,2,4,10,2];
let column_3=[95,95,54,97,63,56,61,85,67,44,50,82,86,63,45,88,77,50,61,63,44,67,87,87,88,90,72,41,42,41];
let column_4=[74,73,41,63,62,79,94,99,68,67,85,100,70,96,85,68,54,87,97,43,71,77,68,71,64,77,64,50,62,96];


let sum_1=0;
let sum_2=0;
let sum_3=0;
let sum_4=0;


column_1.forEach(item => {
    sum_1 += item;
});

column_2.forEach(item => {
    sum_2 += item;
});

column_3.forEach(item => {
    sum_3 += item;
});

column_4.forEach(item => {
    sum_4 += item;
});

let sums=[sum_1,sum_2,sum_3,sum_4];

let total_s=sums[0]+sums[1]+sums[2]+sums[3];

const results = {
	col1: column_1,
	col2: column_2,
	col3: column_3,
	col4: column_4,
	sums: sums,
	total_score: total_s,
};

console.log(results);
