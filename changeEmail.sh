git filter-repo --commit-callback '
if commit.author_email == b"yousseftaoussi894gmail.com":
    commit.author_email = b"yousseftaoussi2003@gmail.com"
    commit.committer_email = b"yousseftaoussi2003gmail.com"
' --force

