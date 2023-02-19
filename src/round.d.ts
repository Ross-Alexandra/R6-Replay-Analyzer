interface MatchType {
    name: 'QUICK_MATCH' | 'MATCHMAKING_PVP_RANKED' | 'MATCHMAKING_PVE' | 'MATCHMAKING_PVE_PARTY' | 'MATCHMAKING_PVE_LONEWOLF' | 'OPERATIONS' | 'CUSTOMGAME_PVP' | 'CUSTOMGAME_PVP_DEDICATED' | 'DEV' | 'MATCHMAKING_PVP_EVENT' | 'MATCHMAKING_PVP_NEWCOMER' | 'MATCHMAKING_PVP_UNRANKED' | 'MATCHREPLAY' | 'PLATFORM_TOURNAMENT',
    id: number
}

interface SiegeMap {
    name: 'CLUBHOUSE' | 'BORDER' | 'KANAL' | 'SKYSCRAPER' | 'TOWER' | 'CHALET' | 'BANK' | 'OREGON' | 'KAFE_DOSTOYEVSKY' | 'VILLA' | 'COASTLINE' | 'STADIUM_BRAVO';
    id: number;
}

interface GameMode {
    name: 'BOMB',
    id: number;
}

interface Team {
    name: string;
    score: number;
}

interface Player {
    id: string;
    profileID: string;
    username: string;
    teamIndex: number;
    heroName: number;
    alliance: number;
    roleImage: number;
    roleName: string;
    rolePortrait: number;
}

interface Header {
    gameVersion: `Y${number}S${number}`;
    codeVersion: number;
    timestamp: string;
    matchType: MatchType;
    map: SiegeMap;
    recordingPlayerID: string;
    recordingProfileID: string;
    additionalTags: string;
    gamemode: GameMode;
    roundsPerMatch: number;
    roundNumber: number;
    overtimeRoundNumber: number;
    teams: Team[];
    players: Player[];
    gmSettings: number[];
    playlistCategory: number;
    matchID: string;
}

interface BaseActivity {
    type: string;
    time: string;
    timeInSeconds: number;
}

interface LocateObjectiveActivity extends BaseActivity {
    type: 'LOCATE_OBJECTIVE';
    username: string
}

interface KillActivity extends BaseActivity {
    type: 'KILL';
    username: string;
    target: string;
    headshot: boolean;
}

interface PlantStartActivity extends BaseActivity {
    type: 'DEFUSER_PLANT_START';
    username: string;
}

interface PlantCompleteActivity extends BaseActivity {
    type: 'DEFUSER_PLANT_COMPLETE';
    username: string;
}

interface DisableStartActivity extends BaseActivity {
    type: 'DEFUSER_DISABLE_START';
    username: string;
}

interface DisableCompleteActivity extends BaseActivity {
    type: 'DEFUSER_DISABLE_COMPLETE';
    username: string;
}

type Activity = LocateObjectiveActivity | KillActivity | PlantStartActivity | PlantCompleteActivity | DisableStartActivity | DisableCompleteActivity;
type ActivityFeed = Activity[];

interface Round {
    header: Header;
    activityFeed: ActivityFeed;
}

type RoundsActivityFeedItem = Activity & {
    roundNumber: number;
}