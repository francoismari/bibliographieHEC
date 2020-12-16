function showFirstType() {
    selectedValue = document.getElementById('sourceType').value;
    if(selectedValue == "journalArticle")
    {
        document.getElementById('selectArticleType').style.display = 'block';
    }
    else {
        document.getElementById('selectArticleType').style.display = 'none';
    }

    if(selectedValue == "blog")
    {
        document.getElementById('selectBlog').style.display = 'block';
    }
    else
    {
        document.getElementById('selectBlog').style.display = 'none';
    }

    if(selectedValue == "conference")
    {
        document.getElementById('selectConference').style.display = 'block';
    }
    else
    {
        document.getElementById('selectConference').style.display = 'none';
    }

    if(selectedValue == "fb")
    {
        document.getElementById('selectFb').style.display = 'block';
    }
    else
    {
        document.getElementById('selectFb').style.display = 'none';
    }
    if(selectedValue == "books")
    {
        document.getElementById('selectBooks').style.display = 'block';
    }
    else {
        document.getElementById('selectBooks').style.display = 'none';
    }

    if(selectedValue == "law")
    {
        document.getElementById('selectLaw').style.display = 'block';
    }
    else {
        document.getElementById('selectLaw').style.display = 'none';
    }

    if(selectedValue == "multi")
    {
        document.getElementById('selectMulti').style.display = 'block';
    }
    else {
        document.getElementById('selectMulti').style.display = 'none';
    }

    if(selectedValue == "classNotes")
    {
        document.getElementById('selectClassNotes').style.display = 'block';
    }
    else {
        document.getElementById('selectClassNotes').style.display = 'none';
    }

    if(selectedValue == "gov")
    {
        document.getElementById('govPublication').style.display = 'block';
    }
    else {
        document.getElementById('govPublication').style.display = 'none';
    }

    if(selectedValue == "textSection")
    {
        document.getElementById('ouvrageOrBDD').style.display = 'block';
    }
    else {
        document.getElementById('ouvrageOrBDD').style.display = 'none';
    }

    if(selectedValue == "table")
    {
        document.getElementById('tableSelect').style.display = 'block';
    }
    else {
        document.getElementById('tableSelect').style.display = 'none';
    }

    if(selectedValue == "these")
    {
        document.getElementById('theseSelect').style.display = 'block';
    }
    else {
        document.getElementById('theseSelect').style.display = 'none';
    }

    if(selectedValue == "webSite")
    {
        document.getElementById('webSiteSelect').style.display = 'block';
    }
    else {
        document.getElementById('webSiteSelect').style.display = 'none';
    }

    if(selectedValue == "webPage")
    {
        document.getElementById('webPageSelect').style.display = 'block';
    }
    else {
        document.getElementById('webPageSelect').style.display = 'none';
    }
}

function showArticlesTypes() {
    selectValueForArticles = document.getElementById('articleType').value;
    if(selectValueForArticles == 'revueArticle')
    {
        document.getElementById('revueArticleSelected').style.display = 'block';
    }
    else {
        document.getElementById('revueArticleSelected').style.display = 'none';
    }

    if(selectValueForArticles == 'journalJustArticle')
    {
        document.getElementById('journalJustArticleSelected').style.display = 'block';
    }
    else {
        document.getElementById('journalJustArticleSelected').style.display = 'none';
    }

    if(selectValueForArticles == 'journalTypeRevue')
    {
        document.getElementById('journalTypeRevueSelected').style.display = 'block';
    }
    else {
        document.getElementById('journalTypeRevueSelected').style.display = 'none';
    }

    if(selectValueForArticles == 'journalTypeArticle')
    {
        document.getElementById('journalTypeArticleSelected').style.display = 'block';
    }
    else {
        document.getElementById('journalTypeArticleSelected').style.display = 'none';
    }
}

function showFBTypes() {
    selectValueForArticles = document.getElementById('whichFB').value;
    if(selectValueForArticles == 'gazouillisSelect')
    {
        document.getElementById('gazouilliSelected').style.display = 'block';
    }
    else {
        document.getElementById('gazouilliSelected').style.display = 'none';
    }

    if(selectValueForArticles == 'fbPageSelect')
    {
        document.getElementById('fbPageSelected').style.display = 'block';
    }
    else {
        document.getElementById('fbPageSelected').style.display = 'none';
    }
}

function showBookTypes() {
    selectValueForArticles = document.getElementById('whichBookType').value;
    if(selectValueForArticles == 'encyclopediaSelect')
    {
        document.getElementById('dictionnaryOrEncyclopediaSection').style.display = 'block';
    }
    else {
        document.getElementById('dictionnaryOrEncyclopediaSection').style.display = 'none';
    }

    if(selectValueForArticles == 'collectiveBookSelect')
    {
        document.getElementById('openBookSection').style.display = 'block';
    }
    else {
        document.getElementById('openBookSection').style.display = 'none';
    }

    if(selectValueForArticles == 'onlineFreeBookSelect')
    {
        document.getElementById('freeBookSection').style.display = 'block';
    }
    else {
        document.getElementById('freeBookSection').style.display = 'none';
    }
}

function showMultiTypes() {
    selectValueForMultimedia = document.getElementById('whichMultiType').value;
    if(selectValueForMultimedia == 'audiovisualMultimediaSelect')
    {
        
        document.getElementById('audioVisualMultimedia').style.display = 'block';
    }
    else {
        document.getElementById('audioVisualMultimedia').style.display = 'none';
    }

    if(selectValueForMultimedia == 'filmMultmediaSelect')
    {
        document.getElementById('filmMultimedia').style.display = 'block';
    }
    else {
        document.getElementById('filmMultimedia').style.display = 'none';
    }

    if(selectValueForMultimedia == 'softwareMultimediaSelect')
    {
        document.getElementById('softwareMultimedia').style.display = 'block';
    }
    else {
        document.getElementById('softwareMultimedia').style.display = 'none';
    }
}