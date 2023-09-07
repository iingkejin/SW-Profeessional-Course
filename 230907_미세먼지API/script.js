var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getMsrstnAcctoRDyrg'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'rOGI%2BIvn6bqhwghISJpom2Dz1zr0tbNdR%2Blm8fl5xrLwUFt9EGQHinJBCAQhO4c3yub9o5bhWPy9AxyTKTen%2BQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* 응답 데이터 타입 설정 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 설정 */
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('경북'); /* 조회 할 데이터 시도 이름 설정*/
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 데이터 기간 */

xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
  if (this.readyState == 4) { 
    if(this.status === 200) {
      let responsData = JSON.parse(this.responseText);
      console.log(responsData)
    }
  }
};

xhr.send('');