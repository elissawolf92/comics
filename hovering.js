// Set async to false so we load all data before proceeding
$.ajaxSetup( {"async": false} );

// load percentages for categories
var calvin_percentages = [];
$.getJSON('./calvindata/category_info.json', function(data) {
	calvin_percentages = data;
});

// load name mappings (e.g. INSTRU_BEHAVIOR --> Instrumenal Behavior)
var translations = {};
$.getJSON('./translations.json', function(data) {
	translations = data;
});

// load RID
var RID = {};
$.getJSON('./RID.json', function(data) {
	RID = data;
});

// insert images and top 10 text into 

$(".face").hover(
	function() {
		$("#stats").html("<h3>" + calvin_percentages[this.id] + "</h3><br>" + word_associations[this.id]);
	},
	function() {
		$("#stats").html("");
	}
);

// load word associations for all top percentage categories
/*
function load_word_associations() {
	var word_associations = {};
	for (process in RID) {
		for (category in process) {
			for (subcategory in category) {
				word_associations[subcategory] = 
			}
		}
	}

};
*/


/*
calvin_percentages = {
	"morality": "Moral Imperative: 2.58%",
	"affection": "Affection: 3.27%",
	"aggression": "Aggression: 3.53%",
	"orality": "Orality: 3.75%",
	"vision": "Vision: 5.56%",
	"constructive": "Constructive Behavior: 6.97%",
	"social": "Social Behavior: 7.47%",
	"time": "Time: 10.87%",
	"concreteness": "Concreteness: 12.45%",
	"abstract": "Abstract thought: 12.72%"
}

word_associations = {
	"morality": "legitimacy respect birthright* commandment* conscienc* conscientiou* correct* custom customer* customiz* duti* duty* ethic* honest* honesty* honor* honorabl* honour* honourabl* justic* law lawful* laws legal* legitimat* moral* morality* ought* prerogativ* principl* privileg* proper* rectitud* respectful* responsibility* responsibl* right* righteou* rightful* sanct* should* trustworthy* unjust* upright* virtu*",
	"affection": "affect* affectionat* amorou* amourou* appreciat* attractiv* befriend* belov* bosom* bridal* bride* cherish* congenial* cordial* courtship* darl* dear* devot* embrac* enamor* enamour* endear* familiar* fonder farewell* favor* favour* fianc* flirt* fond fondnes* fraternity* friend* friendship* goodby* grateful* intimacy* intimat* kind* kindnes* like* liking* lov* marri* marriag* marry* mate mated mates mating* mercy* pat pats patt* piti* pity* romanc* sweetheart* sympat* unselfish* warmheart* welcom* wooed* wooing* woos",
	"aggression": "abhor* abus* abusiv* accus* afflict* aggress* aggressiv* ambush* anger* angri* angrier* angry* annihilat* annoy* annoyanc* antagoniz* argu* argument* army* arrow* assault* attack* aveng* ax axe axes battl* beak* beat* beaten* betray* blade* blam* bloody* bother* brawl* break* brok* broken* brutal* cannon* chid* combat* complain* conflict* condemn* controversy* critic* cruel* crush* cut cuts cutt* damag* decei* defeat* degrad* demolish* depriv* derid* despis* destroy* destruct* destructiv* detest* disagre* disagreement* disapprov* discontent* dislik* disput* disturb* doubt* enemi* enemy* enrag* exasperat* controversial* critique disparag* irritable exploit* exterminat* feud* fierc* fight* fought* furiou* fury* gash* grappl* growl* grudg* gun gunn* guns harm* harsh* hate* hatr* hit hits hitt* homicid* hostil* hurt* ingrat* injur* injury* insult* invad* invas* irat* irk* irritat* jealou* jealousy* jeer* kick* kil* kill* knif* kniv* loath* maim* mistreat* mock* murder* obliterat* offend* oppos* predatory* protest* quarrel* rage rages raging rapin* rebel* rebell* rebuk* relentles* reproach* resent* resentment* retribut* reveng* revolt* ridicul* rip ripp* rips rob robb* robs sarcasm* sarcastic* scalp* scof* scoff* scourg* seiz* sever* severity* shatter* shoot* shot* shov* slain* slander* slap* slaughter* slay* slew* smash* snarl* sneer* spear* spiteful* spurn* stab* steal* stol* stolen* strangl* strif* strik* struck* struggl* stubborn* sword* taunt* temper* threat* threaten* tore torment* torn* tortur* traitor* trampl* treacherou* treachery* tyrant* unkind* vengeanc* vengeful* vex vexing violat* violenc* violent* war warring warrior* wars weapon* whip* wound* wrath* football* wreck*",
	"orality": "absinth* ale ales alimentary ambrosia* ambrosial* appetit* apple* artichok* asparagu* bacon* banana* bean* beef* beer* belch* bellies belly berri* berry* beverag* biscuit* bite* bite bites biting bitten* bonbon* brandy* bread* breakfast* breast* brew* broth burp* butter* buttermilk* cafe cafes cake cakes cafetaria candy* cannibal* caviar* champagn* chees* cherri* cherry* chestnut* chew* chok* cider* claret* cob cobs cocoa* cocoanut* coconut* coffe* consum* cook* corn* cough* cranberry* cream* delicaci* delicacy* dessert* devour* diet* digest* dine dines dining dinner* dish dishes drank* drink* drunk* drunken* eat* eaten* egg* entrail* famin* famish* fast fasts fat fatten* feast* fed feed feeds fig figs flour* food* foodstuff* fork* fruit* garlic* gin ginger* gins glutton* gluttonou* gnaw* gobbl* grain* grap* grog* gruel* gulp* gum gums gut guts ham hams herb* honey* hunger* hungry* imbib* inedibl* intestin* jaw* juic* lap laps lemon* lick* lime limes lip lips liqueur* liquor* lunch* maiz* meal* meat* melon* menu* milk* mint* morsel* mouth* mouthful* mushroom* mutton* naus* nectar* nibbl* nourish* nourishment* nurtur* nut nuts oliv* oral* palat* partak* pastri* pastry* pea peanut* pear* peas pepper* philtr* pineappl* poison* pork* porridg* pot potato* potbel* pots pucker* pumpkin* quench* raspberry* raw rawly repast* restaurant* restaurent* rice rices ripenes* roast* rum rums salad* saliva* salivat* salt* sauc* sauerkraut* sesam* sherbert* sherry* soup* spat* spit* spittl* spoon* starv* starvat* stomach* strawberri* strawberry* suck* suckl* sugar* supper* swallow* tea teas teat* teeth* thirst* thirsty* throat* tit tits tomato* tongu* tooth* uncook* veal* vegetabl* venison* vodka* vomit* wheat* whiskey* whisky* yam yams* yeast*",
	"vision": "blink* illuminant invisibility monocular amber* appear* appearanc* aurora* azur* beam* behold* binocular blue* bluish* bright* brown* brunett* chromatic* color* colour* complex* crimson* discern* dye* emerald* film* flash* flicker* flourescent* gaze* gazing* glanc* glar* gleam* glimps* glint* glisten* glitter* glossy* glow* gray* green* grey* halo* hue* illuminat* imag* invisibl* lamp* lantern* lavender* light* lighten* lightn* limpid* look* lucid* luminance luminou* luster* lustrou* moonbeam* moonlight* notic* observ* opaqu* paint* peek* peer* pictur* pink* radianc* radiant* ray rays regard* rosy* roug* ruby* ruddy* sapphir* saw scan scann* scans scarlet* scen* scenic* see seeing* seen* sees sheen* shimmer* shin* shon* sight* sparkl* spied spies spy spying* star starlight* stars sunlight* sunshin* survey* tan tanned tanning* tans tint* translucent* transparent* twinkl* unseen* view* violet* visibl* vision* visual* watch* witnes* yellow*",
	"constructive": "avail caveat* divestment* dividend* foundr* laborator* spin-off* availability component* ingredient logistics merchandise provision* achiev* achievement* acquir* acquisit* afford* aim* applic* applie* apply architect* assembl* attain* attempt* availabl* belong* bid* bought* build* built* burden* busines* buy* capabl* carri* carry* claim* collect* construct* copi* copy* cost* count* craft* craftsman* cultivat* cure* curing* deliver* earn* effort* employ* endeavor* factori* factory* feat feats find* finish* forge forges found* gain* goal* grasp* harvest* hire hired hires hiring* improv* industri* industry* job jobs labor* laboriou* labour* labouriou* lesson* machin* machinery* mak* manipulat* manufactur* market* mend* merchant* money* obtain* occupat* occupy* ownership* paid* pay paying* pays perform* pick* plough* plow* posses* possess* practic* prepar* pric* privation* produc* profit* profitabl* property* purchas* pursu* reach* reconstruct record* recover* repair* reproduce restor* result* risk* sel* sell* skil* skill* skillful* sold* sow* spend* spent* student* studi* studiou* study* succe* sweep* swept* task* test* toil toiled toils* trad* tried try trying* trys use used uses using win winning* wins won work*",
	"social": "guest* quota quota-* quotas acquiescence approbation consensus* consult prosocial sociable able* accept* acceptanc* addres* admit* advic* advis* agre* aid* allow* announc* answer* apologis* apologiz* appeal* approv* approval* ask asked asking asks assist* assur* bargain* beckon* beseech* borrow* call* comment* commit* communicat* conduct* confer* confes* confid* confirm* congratulat* consent* consol* consolat* convers* conversat* convinc* cooperat* counsel* declar* depend* dependent* describ* dialogu* discours* discus* discuss* donat* educat* elect* encourag* encouragement* engag* escort* excus* explain* follow* forgav* forgiv* forgiven* generosity* generou* gift* grant* greet* guid* guidanc* help* imitat* implor* influenc* inform* inquir* instruct* interview* introduc* invit* kneel* lend* lent* meet* ment* messag* met* mutual* offer* pardon* participat* persuad* persua* plead* pleas* preach* proclaim* promis* propos* protect* provid* quot* recit* reeducation remark* remind* repli* reply represent* request* rescu* respond* respons* said* sale sales say* servic* shar* shelter* signal* social* solicit* speak* speaker* speech* spok* spoken* suggest* sworn* talk* taught* teach* tell* thank* told* treat* utter* visit*",
	"time": "full-time long-term longevit* part-time short-term abrupt* again ago already* ancient brevity* brief* clock* daily* date dated dates dating decad* dur* durat* earlier* early* ephemeral* ever* former* frequent* hast* henceforth* hour* immediat* immediate* instant* interlud* meantim* meanwhil* minut* moment* momentary* month* now occas* occasional* often* old older* once past* prematur* present* previou* prior* quick* season* seldom* sometim* soon* sooner* sudden* temporary* then* till* time* timing* today* tonight* week* when* whenever* whil* year* yesterday*",
	"concreteness": "acros* afar* afield* ahead* along* among* apart* asid* at away* back* behind* besid* between* center* centr* circl* clos* closer* corner* curv* distanc* distant* east* eastern* everywher* extend* extensiv* extent* far farther* flat* forward* front* further* here hither* insid* interior* layer* length* level* long* middl* midst* narrow* near* nearby* nearer* nearest* off open* out outing* outs outsid* outward* over* plac* point* posit* rear* region* round* separat* side sided sides siding* situat* somewher* south* spac* spaciou* spatial squar* straight* surfac* surround* thenc* thither* tip tipp* tips toward* west* western* wher* wherever* wide* width* within*",
	"abstract": "diverse diversification diversified diversity evident evidential guess* logistic abstract* almost* alternativ* analy* attribut* axiom* basic* belief* believ* calculat* caus* certain* characteriz* choic* choos* chos* circumstanc* comprehend* compar* comprehens* conditional* concentrat* concept* conclud* conjectur* consequenc* consequent* consider* contriv* criter* criteria* decid* deem* defin* deliberat* determin* differenc* different* distinct* distinguish* doctrin* effect* establish* estimat* evaluat* evidenc* examin* exampl* except* fact facts featur* figur* forethought* formulat* gues* history* idea* importanc* important* informat* interpret* interpretat* judg* judgment* knew* know* learn* logic* may meant* mistak* mistaken* mistook* model* opin* otherwis* perhap* plan* possi* predicat* predict* probab* probabl* problem* proof* prov* purpos* quali* quant* re-analy* re-examin* rational* real reality* reason* reasonabl* reconsider* reexamin* reformulat* reinterpretat* relearn* relevanc* relevant* research* resolv* schem* scienc* scientific* select* significanc* solut* someth* somewhat* sourc* subject* suppos* sure surely tend* them* theor* think* thinker* thought* topic* true truly truth* ttt1 understand* understood* weigh weighed* weighing* weighs why"
}
*/

