$('#user').autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Chanel Fetters', 'Victoria Chambers', 'Dawn Wood', 'Dan Oliver', 'Dale Byrd', 'Fred Mertz', 'Lucy Ricardo', 'Ethyl Mertz', 'Ricky Ricardo'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});