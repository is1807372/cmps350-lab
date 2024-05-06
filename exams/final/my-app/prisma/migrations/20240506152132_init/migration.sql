-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "team" TEXT NOT NULL,
    CONSTRAINT "Member_team_fkey" FOREIGN KEY ("team") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_title_key" ON "Team"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Member_team_title_key" ON "Member"("team", "title");
