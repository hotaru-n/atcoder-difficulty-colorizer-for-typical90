// ==UserScript==
// @name            AtCoder Difficulty Colorizer for Typical 90
// @namespace       https://github.com/hotarunx
// @homepage        https://github.com/hotarunx/atcoder-difficulty-colorizer-for-typical90
// @supportURL      https://github.com/hotarunx/atcoder-difficulty-colorizer-for-typical90/issues
// @version         0.0.1
// @description     競プロ典型 90 問の問題ページのタイトルを色付けします
// @author          hotarunx
// @match           https://atcoder.jp/contests/typical90/tasks/*
// @exclude         https://atcoder.jp/contests/typical90/tasks
// @grant           none
// @license         MIT
//
// Copyright(c) 2020 hotarunx
// This software is released under the MIT License, see LICENSE or https://github.com/hotarunx/atcoder-difficulty-colorizer-for-typical90/blob/main/LICENSE.
//
// ==/UserScript==

(async function () {
    // タイトルのHTML要素
    const title = document.getElementsByClassName("h2")[0];
    // タイトルの★数から対応する色を得る
    const color = returnDifficultyColor(title.textContent);

    // タイトルの色を変える
    title.style.color = color;
})();

// 引数の文字列に含まれる★数に対応するカラーコードを返す
function returnDifficultyColor(title) {
    if (title.match("★1")) return "#808080";
    if (title.match("★2")) return "#808080";
    if (title.match("★3")) return "#804000";
    if (title.match("★4")) return "#008000";
    if (title.match("★5")) return "#00C0C0";
    if (title.match("★6")) return "#0000FF";
    if (title.match("★7")) return "#C0C000";
    return "#000000";
}
