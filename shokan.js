'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }  
}

const searchWords =  [
  "T旭川　西川　弘二",  
  "T旭川　寺沢　和久",  
  "T旭川　宮澤　義行",  
  "T旭川　梅津　英正",  
  "T旭川　石山　博朗",
  "T札幌　相茶　省三",
  "T函館　堀田　易"
  ];

const masterInformation = [
  "T旭川　西川　弘二",  
  "T旭川　寺沢　和久",  
  "T旭川　宮澤　義行",  
  "T旭川　梅津　英正",  
  "T旭川　石山　博朗",  
  "T旭川　津崎　遵",  
　"T札幌　相茶　省三",  
  "T札幌　酒井　忠則", 
  "T札幌　小祝　一洋",  
  "T札幌　佐々木　義規",  
  "T札幌　松渕　憲一",  
  "T札幌　澤田　康",
  "T函館　堀田　易"
  ];
  
  const nameInformation = [
    "西川　弘二",  
    "寺沢　和久",  
    "宮澤　義行",  
    "梅津　英正",  
    "石山　博朗",  
    "津崎　遵",  
  　"相茶　省三",  
    "酒井　忠則", 
    "小祝　一洋",  
    "佐々木　義規",  
    "松渕　憲一",  
    "澤田　康",
    "堀田　易" 
    ];

  const companyInformation = [
    "T旭川",  
    "T旭川",  
    "T旭川",  
    "T旭川",  
    "T旭川",  
    "T旭川",  
  　"T札幌",  
    "T札幌", 
    "T札幌",  
    "T札幌",  
    "T札幌",  
    "T札幌",
    "T函館"
    ];

  
  const position = [
    "代表",  
    "営業",  
    "管理",  
    "サ",  
    "人労",  
    "人労",    
    "代表　営業　管理",  
    "管理　人労", 
    "営業",  
    "人労",  
    "サ",  
    "人労",
    "代表　営業"  
  ];
  
  const companiesInHokkaido = [ 
    "T旭川",  
    "T札幌",  
    "T函館",  
    "T釧路",  
    "P旭川",  
    "P札幌",  
    "P函館",  
    "TM釧路",  
    "P帯広",  
    "P北見",  
    "C旭川",  
    "C道北",  
    "C札幌",  
    "C函館",  
    "C釧路(TM釧路)",  
    "C帯広",  
    "C北見",  
    "C苫小牧",  
    "N旭川",  
    "Nたいせつ",  
    "N札幌",  
    "N道都",  
    "N函館",  
    "N釧路",  
    "N帯広",  
    "N北見",  
    "N苫小牧"
  ];


  // 要件をはじめにテストにする

  //既読者の販売店名のみ表示　　
  function onlyCommonCompany() {
    const commonCompanies = [];
    for (let i = 0; i < masterInformation.length; i++) {
      if (searchWords.includes(masterInformation[i])) {
        commonCompanies.push(companyInformation[i]);
      }
    }
    const commonCompany= Array.from(new Set(commonCompanies));
    console.log(commonCompanies);
    console.log(commonCompany);
    return commonCompany;
  }
  
  test(onlyCommonCompany(),['T旭川', 'T札幌', `T函館`]);


  


// 共通している要素を取り出す関数 要件のテスト
  test(commonFilter(searchWords, masterInformation),
    [ 
      "T旭川　西川　弘二　代表",  
      "T旭川　寺沢　和久　営業",  
      "T旭川　宮澤　義行　管理",  
      "T旭川　梅津　英正　サ",  
      "T旭川　石山　博朗　人労", 
      "T札幌　相茶　省三　代表　営業　管理", 
      "T函館　堀田　易　代表　営業" 
    ]   
    );

    test(differenceFilter(searchWords, masterInformation),
    [
      "T旭川　津崎　遵　人労",  
      "T札幌　酒井　忠則　管理　人労", 
      "T札幌　小祝　一洋　営業",  
      "T札幌　佐々木　義規　人労",  
      "T札幌　松渕　憲一　サ",  
      "T札幌　澤田　康　人労"
    ]
    );


// document.getElementsByClassName("box-ReadAMessage")[0].innerText = commonCompanies;


//全体　既読者のみ返す    
function commonFilter() {
  const common = [];
  for (let i = 0; i < masterInformation.length; i++) {
    if (searchWords.includes(masterInformation[i])) {
      common.push(masterInformation[i] + "　" + position[i]);
    }
  }
  console.log(common);
  // document.getElementsByClassName("box-ReadAMessage")[0].innerText = common;
  return common;
}
// let pushBotton = document.getElementById("readAMessage")
// pushBotton.addEventListener("click", commonFilter);


console.log(commonFilter())

//全体　未読者のみ返す
function differenceFilter(arrayA, arrayB) {
  const difference = [];
  for (let i = 0; i < masterInformation.length; i++) {
    if (searchWords.includes(masterInformation[i])) {
    } else {
      difference.push(masterInformation[i] + "　" + position[i]);
    }
  }
  console.log(difference);
  return difference;
}




//既読 >> 指定した会社
function commonCompany(companyName){
  const common = [];
  for (let i = 0; i < masterInformation.length; i++) {
    if (searchWords.includes(masterInformation[i])) {
      common.push(companyInformation[i] + "　" + nameInformation[i] + "  " + position[i]);
    }
  }
  console.log(common)
  const arrayOfCommonCompany = [];
  for(const value of common)
  if(value.includes(companyName)){
    arrayOfCommonCompany.push(value);
  }
  console.log(arrayOfCommonCompany)
  document.getElementsByClassName("box-Hokkkaido")[0].innerText = arrayOfCommonCompany;
  return arrayOfCommonCompany;
}
 let pushBotton = document.getElementById("companyName")
 pushBotton.addEventListener("click", commonCompany);




console.log(commonCompany("T札幌"));
console.log(commonCompany("T旭川"));

test(commonCompany("T札幌"),['T札幌　相茶　省三  代表　営業　管理']);

test(commonCompany("T旭川"),
['T旭川　西川　弘二  代表', 'T旭川　寺沢　和久  営業', 'T旭川　宮澤　義行  管理', 'T旭川　梅津　英正  サ', 'T旭川　石山　博朗  人労']);
// test(commonCompany("T函館"),[`T函館 堀田　易　代表　営業`]);


//既読 >> 指定した会社 >> 指定した役割
function commonCompanyPosition(companyName, positionInCompany){
  const common = [];
  for (let i = 0; i < masterInformation.length; i++) {
    if (searchWords.includes(masterInformation[i])) {
      common.push(companyInformation[i] + "　" + nameInformation[i] + "  " + position[i]);
    }
  }
  // console.log(common)

  const arrayOfCommonCompany = [];
  for(const value of common)
  if(value.includes(companyName)){
    arrayOfCommonCompany.push(value);
  }
  // console.log(arrayOfCommonCompany)

  const arrayOfCommonCompanyPosition = [];
  for(const valueOfPosition of arrayOfCommonCompany)
  if(valueOfPosition.includes(positionInCompany)){
    arrayOfCommonCompanyPosition.push(valueOfPosition);
  }
  return arrayOfCommonCompanyPosition
}


console.log(commonCompanyPosition("T旭川",  "代表"));
console.log(commonCompanyPosition("T函館",  "営業"));
test(commonCompanyPosition("T旭川", "代表"),['T旭川　西川　弘二  代表']);
