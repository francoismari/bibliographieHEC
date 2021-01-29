var today = new Date();

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

let showSuccessMessage = (message) => {
    document.getElementById('successMessage').innerHTML = '<div onclick="copyToClipboard(\''+message+'\')"><center>🥳 <strong>APPUYER POUR COPIER</strong><br>' + message + '</center></div>';
    document.getElementById('successMessage').style.display = "block";
    document.getElementById('errorMessage').style.display = "none";
}

let showErrorMessage = (message) => {
    document.getElementById('successMessage').style.display = "none";
    document.getElementById('errorMessage').innerHTML = message;
    document.getElementById('errorMessage').style.display = "block";
}

let createArticleBiblio = (typeOfArticle) => {
    if(typeOfArticle == 'revueArticle') {
        let author = document.getElementById('authorForRevueArticle').value;
        let year = document.getElementById('yearForRevueArticle').value;
        let title = document.getElementById('titleForRevueArticle').value;
        let revue = document.getElementById('RevueForRevueArticle').value;
        let volume = document.getElementById('volumeForReviewArticle').value;
        let numero = document.getElementById('numberForReviewArticle').value;
        let page = document.getElementById('pageForReviewArticle').value;

        if(author != '' || year != '' || title != '') {
            let articleBibliography = author + " (" + year + ")" + ", " + revue + ", vol. " + volume + ", no " + numero + ", p. " + page; 
            showSuccessMessage(articleBibliography);
        }
        else {
            showErrorMessage("L'auteur, la date, ou le nom de l'article n'a pas été renseigné");
        }
    }
    else if(typeOfArticle == 'journalJustArticle')
    {
        let author = document.getElementById('authorForjournalJustArticle').value;
        let year = document.getElementById('yearForjournalJustArticle').value;
        let date = document.getElementById('dateForjournalJustArticle').value;
        let title = document.getElementById('titleForjournalJustArticle').value;
        let journal = document.getElementById('journalForjournalJustArticle').value;
        let section = document.getElementById('sectionForjournalJustArticle').value;
        let page = document.getElementById('pageForjournalJustArticle').value;

        if(author != '' || year != '' || date != '' || title != '') {
            let articleBibliography = author + " (" + year + ", " + date + "). \"" + title + "\", <i>" + journal + "</i>, " + section + ", p. " + page; 
            showSuccessMessage(articleBibliography);
        }
        else {
            showErrorMessage("L'auteur, la date, ou le nom de l'article n'a pas été renseigné");
        }

    }
    else if(typeOfArticle == 'journalTypeRevue')
    {
        let author = document.getElementById('authorForjournalTypeRevue').value;
        let year = document.getElementById('yearForjournalTypeRevue').value;
        let title = document.getElementById('titleForjournalTypeRevue').value;
        let periodicalTitle = document.getElementById('periodTitleForjournalTypeRevue').value;
        let volume = document.getElementById('volumeForjournalTypeRevue').value;
        let numero = document.getElementById('numberForjournalTypeRevue').value;
        let from = document.getElementById('fromForjournalTypeRevue').value;

        if(author != '' || year != '' || title != '') {
            let articleBibliography = author + " (" + year + "). \"" + title + "\", <i>" + periodicalTitle + "</i>, vol. " + volume + ", no " + numero + ". Récupéré de " + from; 
            showSuccessMessage(articleBibliography);
        }
        else {
            showErrorMessage("L'auteur, la date, ou le nom de l'article n'a pas été renseigné");
        }

    }
    else if(typeOfArticle == 'journalTypeArticle')
    {
        let author = document.getElementById('authorForjournalTypeArticle').value;
        let year = document.getElementById('yearForjournalTypeArticle').value;
        let date = document.getElementById('dateForjournalTypeArticle').value;
        let title = document.getElementById('titleForjournalTypeArticle').value;
        let journalTitle = document.getElementById('journalTitleForjournalTypeArticle').value;
        let section = document.getElementById('sectionForjournalTypeArticle').value;
        let from = document.getElementById('fromForjournalTypeArticle').value;

        if(author != '' || year != '' || date != '' || title != '') {
            let articleBibliography = author + " (" + year + ", " + date + "). \"" + title + "\", <i>" + journalTitle + "</i>, " + section + ". Récupéré de " + from; 
            showSuccessMessage(articleBibliography);
        }
        else {
            showErrorMessage("L'auteur, la date, ou le nom de l'article n'a pas été renseigné");
        }

    }
}

let createBlogBiblio = () => {

    let author = document.getElementById('authorForblog').value;
    let date = document.getElementById('dateForBlog').value;
    let billetTitle = document.getElementById('billetTitleForBlog').value;
    let from = document.getElementById('fromForBlog').value;
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    if(author != '' || date != '' || billetTitle != '' || from != '')
    {
        let blogBiliography = author + ' (' + date + '). ' + billetTitle + ' [Billet de blogue]. Récupéré le '+currentDate+' de ' + from;
        showSuccessMessage(blogBiliography);
    }
    else {
        showErrorMessage("L'auteur, la date, ou le titre du billet de blog n'a pas été renseigné");
    }
}

let createConferenceBiblio = () => {
    let conferencerName = document.getElementById('authorForConf').value;
    let year = document.getElementById('yearForConf').value;
    let confTitle = document.getElementById('titleForConf').value;
    let congresName = document.getElementById('congresNameForConf').value;
    let city = document.getElementById('cityForConf').value;
    let date = document.getElementById('dateForConf').value;
    let institution = document.getElementById('institutionForConf').value;

    if(conferencerName != '' || year != '' || confTitle != '')
    {
        conferenceBilbiography = conferencerName + ' (' + year + '). "' + confTitle + '", communication présentée au ' + congresName + ', ' + city + ', ' + date + ', ' + institution;
        showSuccessMessage(conferenceBilbiography);
    }
    else
    {
        showErrorMessage("Le conférencier, l'année, ou le titre de la conférence n'a pas été renseigné");
    }
}

let createFBBiblio = (typeOfFB) => {
    if(typeOfFB == 'gazouilli')
    {
        let author = document.getElementById('gazouilliAuthor').value;
        let date = document.getElementById('gazouilliDate').value;
        let title = document.getElementById('gazouilliTitle').value;
        let from = document.getElementById('gazouilliFrom').value;
        let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

        if(author != '' || date != '' || title != '' || from != '')
        {
            gazouilliBiblio = author + ' (' + date + '). ' + title + ' [Gazouillis]. Récupéré le ' + currentDate + ' de ' + from;
            showSuccessMessage(gazouilliBiblio);
        }
        else
        {
            showErrorMessage("L'auteur, la date, le titre, ou la source du gazouilli n'a pas été renseigné");
        }
    }
    else if(typeOfFB == 'fbPage')
    {
        let author = document.getElementById('fbAuthor').value;
        let date = document.getElementById('fbDate').value;
        let title = document.getElementById('fbTitle').value;
        let from = document.getElementById('fbFrom').value;
        let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

        if(author != '' || date != '' || title != '' || from != '')
        {
            fbBiblio = author + ' (' + date + '). ' + title + ' [Page Facebook]. Récupéré le ' + currentDate + ' de ' + from;
            showSuccessMessage(fbBiblio);
        }
        else
        {
            showErrorMessage("L'auteur, la date, le titre, ou la source de la page FB n'a pas été renseigné");
        }

    }
}

let createBookBiblio = (bookType) => {
    if(bookType == 'dictionnary')
    {
        let author = document.getElementById('authorForDictionnary').value;
        let year = document.getElementById('yearForDictionnary').value;
        let title = document.getElementById('titleForDictionnary').value;
        let edition = document.getElementById('editionForDictionnary').value;
        let volume = document.getElementById('volumeForDictionnary').value;
        let city = document.getElementById('cityForDictionnary').value;
        let editeur = document.getElementById('editorForDictionnary').value;
        let collection = document.getElementById('collectionForDictionnary').value;
        let page = document.getElementById('pageForDictionnary').value;

        if(author != '' || year != '' || title != '')
        {
            dictionnaryBookBiblio = author + ' (' + year + '). ' + title + ', ' + edition + '<sup>e</sup> éd., vol. ' + volume + ', ' + city + ', ' + editeur + ', coll. ' + collection + ', p.' + page;
            showSuccessMessage(dictionnaryBookBiblio);
        }
        else
        {
            showErrorMessage("L'auteur, la date ou le titre du livre n'a pas été renseigné");
        }
    }
    else if(bookType == 'openBook')
    {
        let director = document.getElementById('directorForOpenBook').value;
        let year = document.getElementById('yearForOpenBook').value;
        let title = document.getElementById('titleForOpenBook').value;
        let edition = document.getElementById('editionForOpenBook').value;
        let city = document.getElementById('cityForOpenBook').value;
        let editeur = document.getElementById('editorForOpenBook').value;
        let collection = document.getElementById('collectionForOpenBook').value;
        let page = document.getElementById('pageForOpenBook').value;

        if(director != '' || year != '' || title != '')
        {
            openBookBiblio = director + ' (dir.) (' + year + '). ' + title + ', ' + edition + '<sup>e</sup> éd., ' + city + ', ' + editeur + ', coll. ' + collection + ', p.' + page;
            showSuccessMessage(openBookBiblio);
        }
        else
        {
            showErrorMessage("Le directeur, la date ou le titre du livre n'a pas été renseigné");
        }
    }
    else if(bookType == 'freeBook')
    {
        let author = document.getElementById('authorForFreeBook').value;
        let year = document.getElementById('yearForFreeBook').value;
        let title = document.getElementById('titleForFreeBook').value;
        let edition = document.getElementById('editionForFreeBook').value;
        let volume = document.getElementById('volumeForFreeBook').value;
        let city = document.getElementById('cityForFreeBook').value;
        let editeur = document.getElementById('editorForFreeBook').value;
        let collection = document.getElementById('collectionForFreeBook').value;
        let from = document.getElementById('fromForFreeBook').value;

        if(author != '' || year != '' || title != '')
        {
            freeBookBiblio = author + ' (' + year + '). ' + title + ', ' + edition + '<sup>e</sup> éd., vol. ' + volume + ', ' + city + ', ' + editeur + ', coll. ' + collection + '. Récupéré de ' + from;
            showSuccessMessage(freeBookBiblio);
        }
        else
        {
            showErrorMessage("L'auteur, la date ou le titre du livre n'a pas été renseigné");
        }

    }
}

let createLawBiblio = () => {
    let gov = document.getElementById('govForLaw').value;
    let year = document.getElementById('yearForLaw').value;
    let title = document.getElementById('titleForLaw').value;
    let acro = document.getElementById('acroForLaw').value;
    let section = document.getElementById('sectionForLaw').value;
    let article = document.getElementById('articleForLaw').value;
    let url = document.getElementById('urlForLaw').value;

    if(gov != '' || year != '' || title != '')
    {
        lawBiblio = gov + "(" + year + ")" + ". <i>" + title + "</i>, " + acro + ", " + section + ", " + article + ". Récupéré de " + url;
        showSuccessMessage(lawBiblio);
    }
    else
    {
        showErrorMessage("Le nom du gouvernement, l'année, ou le titre n'a pas été renseigné");
    }
}

let createMultimediaBiblio = (multimediaType) => {
    if(multimediaType == 'audioVisual')
    {
        let author = document.getElementById('authorForAudioMulti').value;
        let year = document.getElementById('yearForAudioMulti').value;
        let title = document.getElementById('titleForAudioMulti').value;
        let contentType = document.getElementById('typeForAudioMulti').value;
        let editor = document.getElementById('editorForAudioMulti').value;
        let from = document.getElementById('urlForAudioMulti').value;

        if(author != '' || year != '' || title != '')
        {
            multimediaBiblio = author + ' (' + year + '). ' + title + ' [' + contentType + '], ' + editor + '. Récupéré de ' + from;
            showSuccessMessage(multimediaBiblio);
        }
        else {
            showErrorMessage("L'auteur, l'année, ou le titre du contenu n'a pas été renseigné");
        }
    }
    else if(multimediaType == 'film')
    {
        let real = document.getElementById('directorForFilmMulti').value;
        let date = document.getElementById('dateForFilmMulti').value;
        let title = document.getElementById('titleForFilmMulti').value;
        let mediaType = document.getElementById('mediaTypeForFilmMulti').value;
        let serieTitle = document.getElementById('serieTitleForFilmMulti').value;
        let country = document.getElementById('countryForFilmMulti').value;
        let producer = document.getElementById('producerForFilmMulti').value;

        if(real != '' || date != '' || title != '')
        {
            multimediaFilmBiblio = real + ' (réal.) (' + date + '). ' + title + ' ['+mediaType+'], '+serieTitle+', ' + country + ', ' + producer + ' (prod.).';
            showSuccessMessage(multimediaFilmBiblio);
        }
        else {
            showErrorMessage("Le réalisateur, la date, ou le titre du film n'a pas été renseigné");
        }
    }
    else if(multimediaType == 'software')
    {
        let programmer = document.getElementById('programmerForSoftwareMulti').value;
        let year = document.getElementById('yearForSoftwareMulti').value;
        let title = document.getElementById('titleForSoftwareMulti').value;
        let version = document.getElementById('versionForSoftwareMulti').value;
        let type = document.getElementById('typeForSoftwareMulti').value;
        let city = document.getElementById('cityForSoftwareMulti').value;
        let editor = document.getElementById('editorForSoftwareMulti').value;

        if(programmer != '' || year != '' || title != '')
        {
            multimediaSoftwareBiblio = programmer + ' (' + year + '). <i>' + title + '</i>, version ' + version + ' [' + type + '], ' + city + ', ' + editor;
            showSuccessMessage(multimediaSoftwareBiblio);
        }
        else {
            showErrorMessage("Le programmeur, l'année, ou le titre du logiciel n'a pas été renseigné");
        }
    }
}

let createClassNotesBiblio = () => {
    let profName = document.getElementById('profNameForClassNotes').value;
    let year = document.getElementById('yearForClassNotes').value;
    let classNumero = document.getElementById('classNumberForClassNotes').value;
    let title = document.getElementById('classTitleForClassNotes').value;
    let classTitle = document.getElementById('seanceTitleForClassNotes').value;
    let docType = document.getElementById('documentTypeForClassNotes').value;
    let institution = document.getElementById('institutionForClassNotes').value;

    if(profName != '' || year != '' || classNumero != '' || title != '')
    {
        classNotesBiblio = profName + ' (' + year + '). <i>' + classNumero + ' - ' + title + '</i>, ' + classTitle + ' [' + docType + '], ' + institution;
        showSuccessMessage(classNotesBiblio);
    }
    else {
        showErrorMessage("Le nom du professeur, l'année, le titre ou le numéro de la classe n'a pas été renseigné");
    }
}


let createWebPageBiblio = () => {
    let author = document.getElementById('authorForWebPage').value;
    let year = document.getElementById('yearForWebPage').value;
    let title = document.getElementById('titleForWebPage').value;
    let siteTitle = document.getElementById('siteTitleForWebPage').value;
    let currentDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let url = document.getElementById('urlForWebPage').value;

    if(author != '' || year != '' || title != '' || siteTitle != '')
    {
        webPageBiblio = siteTitle + ' (' + year + '). <i>' + title + '</i>, ' + siteTitle + '. Récupéré le ' + currentDate + ' de ' + url;
        showSuccessMessage(webPageBiblio);
    }
    else {
        showErrorMessage("L'auteur, l'année, ou le titre du site/page n'a pas été renseigné");
    }
}