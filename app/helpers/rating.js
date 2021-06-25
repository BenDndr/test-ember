import Helper from '@ember/component/helper';

export default class rating extends Helper {
  compute(params) {
    const number = params;
    let html = '';
    for (let i = 0; i < number; i++) {
      html += '<i class="fa fa-star"></i> ';
    }
    return html;
  }
}
