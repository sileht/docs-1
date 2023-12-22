/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { IconType } from 'react-icons';
import {
	AiOutlinePartition,
	AiOutlineDeploymentUnit,
	AiOutlineFile,
	AiOutlineApi,
} from 'react-icons/ai';
import { BiBadgeCheck, BiSolidCoinStack, BiRuler, BiCut } from 'react-icons/bi';
import {
	BsRobot,
	BsPatchQuestion,
	BsBook,
	BsCommand,
	BsGear,
	BsLightbulb,
	BsPlugin,
	BsRocket,
	BsStack,
} from 'react-icons/bs';
import { FaShieldAlt, FaHome, FaRegListAlt } from 'react-icons/fa';
import {
	FaStairs,
	FaCirclePlay,
	FaRegLightbulb,
	FaGear,
	FaTrafficLight,
	FaSnowflake,
	FaMoneyBill1,
	FaRegCirclePause,
	FaUserShield,
	FaBug,
} from 'react-icons/fa6';
import { FiType } from 'react-icons/fi';
import { GoGitMerge, GoCodeReview } from 'react-icons/go';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { LiaShareAltSolid } from 'react-icons/lia';
import { MdMonitorHeart, MdScheduleSend } from 'react-icons/md';
import {
	SiSlack,
	SiDatadog,
	SiSnyk,
	SiDependabot,
	SiTeamcity,
	SiGithubactions,
	SiJenkins,
	SiCircleci,
	SiBuildkite,
	SiGitlab,
} from 'react-icons/si';
import { SlRefresh, SlSpeedometer } from 'react-icons/sl';
import { TbCrystalBall, TbPackages, TbBike, TbGitBranch } from 'react-icons/tb';

import { v5 } from 'uuid';
import MergeQueueIcon from '../components/MergeQueueIcon.astro';

export type NavItem = {
	title: string;
	path?: string;
	children?: NavItem[];
	id?: string;
	icon?: IconType;
};

const navItems: NavItem[] = [
	{ title: 'Home', path: '/', icon: FaHome },
	{ title: 'Getting Started', path: '/getting-started', icon: FaCirclePlay },
	{
		title: 'Workflow Automation',
		icon: BsGear,
		path: '/workflow',
		children: [
			{ title: 'Introducing Workflow Automation', path: '/workflow/', icon: BsRobot },
			{
				title: 'Writing Your First Rule',
				path: '/workflow/writing-your-first-rule',
				icon: BiRuler,
			},
			{
				title: 'Use Cases',
				icon: BsLightbulb,
				children: [
					{ title: 'Automatic Merge', path: '/workflow/automerge', icon: GoGitMerge },
					{ title: 'Scheduling Merges', path: '/workflow/schedule-merge', icon: MdScheduleSend },
					{ title: 'Request Reviews', path: '/workflow/request-reviews', icon: GoCodeReview },
					{
						title: 'Delete Head Branches',
						path: '/workflow/delete-head-branches',
						icon: BiCut,
					},
					{
						title: 'Dismiss Reviews',
						path: '/workflow/dismiss-reviews',
						icon: IoIosRemoveCircleOutline,
					},
					{ title: 'Rebasing PRs', path: '/workflow/rebase', icon: TbGitBranch },
					{
						title: 'Custom Branch Protections',
						path: '/workflow/custom-branch-protections',
						icon: FaUserShield,
					},
				],
			},
			{
				title: 'Actions',
				icon: BsRocket,
				path: '/workflow/actions',
				children: [
					{ title: 'Assign', path: '/workflow/actions/assign' },
					{ title: 'Backport', path: '/workflow/actions/backport' },
					{ title: 'Close', path: '/workflow/actions/close' },
					{ title: 'Copy', path: '/workflow/actions/copy' },
					{ title: 'Comment', path: '/workflow/actions/comment' },
					{ title: 'Delete Head Branch', path: '/workflow/actions/delete_head_branch' },
					{
						title: 'Dismiss Reviews',
						path: '/workflow/actions/dismiss_reviews',
						icon: IoIosRemoveCircleOutline,
					},
					{ title: 'Edit', path: '/workflow/actions/edit' },
					{
						title: 'GitHub Actions',
						path: '/workflow/actions/github_actions',
						icon: SiGithubactions,
					},
					{ title: 'Label', path: '/workflow/actions/label' },
					{ title: 'Merge', path: '/workflow/actions/merge' },
					{ title: 'Post Check', path: '/workflow/actions/post_check' },
					{ title: 'Queue', path: '/workflow/actions/queue' },
					{ title: 'Rebase', path: '/workflow/actions/rebase' },
					{
						title: 'Request Reviews',
						path: '/workflow/actions/request_reviews',
						icon: GoCodeReview,
					},
					{ title: 'Review', path: '/workflow/actions/review' },
					{ title: 'Update', path: '/workflow/actions/update' },
					{ title: 'Squash', path: '/workflow/actions/squash' },
				],
			},
		],
	},
	{
		title: 'Merge Queue',
		icon: MergeQueueIcon,
		children: [
			{ title: 'Introduction', path: '/merge-queue', icon: FaRegLightbulb },
			{ title: 'Setup', path: '/merge-queue/setup', icon: FaGear },
			{ title: 'Lifecycle', path: '/merge-queue/lifecycle', icon: SlRefresh },
			{ title: 'Priority', path: '/merge-queue/priority', icon: FaTrafficLight },
			{ title: 'Freeze', path: '/merge-queue/freeze', icon: FaSnowflake },
			{ title: 'Pause', path: '/merge-queue/pause', icon: FaRegCirclePause },
			{ title: 'Multiple Queues', path: '/merge-queue/multi', icon: BiSolidCoinStack },
			{ title: 'Performance', path: '/merge-queue/performance', icon: SlSpeedometer },
			{
				title: 'Speculative Checks',
				path: '/merge-queue/speculative-checks',
				icon: TbCrystalBall,
			},
			{ title: 'Batches', path: '/merge-queue/batches', icon: TbPackages },
			{ title: 'Two-Step CI', path: '/merge-queue/two-step', icon: FaStairs },
			{ title: 'Partitions', path: '/merge-queue/partitions', icon: AiOutlinePartition },
			{ title: 'Deployment', path: '/merge-queue/deploy', icon: AiOutlineDeploymentUnit },
			{ title: 'Monitoring', path: '/merge-queue/monitoring', icon: MdMonitorHeart },
			{ title: 'Troubleshooting', path: '/merge-queue/troubleshooting', icon: FaBug },
		],
	},
	{
		title: 'Commands',
		icon: BsCommand,
		children: [
			{ title: 'About Commands', path: '/commands' },
			{ title: 'Restrictions', path: '/commands/restrictions' },
			{ title: 'Backport', path: '/commands/backport' },
			{ title: 'Copy', path: '/commands/copy' },
			{ title: 'Queue', path: '/commands/queue' },
			{ title: 'Rebase', path: '/commands/rebase' },
			{ title: 'Refresh', path: '/commands/refresh' },
			{ title: 'Requeue', path: '/commands/requeue' },
			{ title: 'Squash', path: '/commands/squash' },
			{ title: 'Update', path: '/commands/update' },
			{ title: 'Dequeue', path: '/commands/dequeue' },
		],
	},
	{
		title: 'Technical Reference',
		icon: BsBook,
		children: [
			{ title: 'Configuration File', path: '/configuration/file-format', icon: AiOutlineFile },
			{
				title: 'Sharing Configuration',
				path: '/configuration/sharing',
				icon: LiaShareAltSolid,
			},
			{ title: 'Conditions', path: '/configuration/conditions', icon: BsPatchQuestion },
			{ title: 'Data Types', path: '/configuration/data-types', icon: FiType },
			{ title: 'API Usage', path: '/api-usage', icon: AiOutlineApi },
			{ title: 'API Reference', path: '/api/', icon: FaRegListAlt },
		],
	},
	{
		title: 'Integrations',
		icon: BsPlugin,
		path: '/integrations',
		children: [
			{ title: 'GitHub Actions', path: '/integrations/gha', icon: SiGithubactions },
			{ title: 'CircleCI', path: '/integrations/circleci', icon: SiCircleci },
			{ title: 'Jenkins', path: '/integrations/jenkins', icon: SiJenkins },
			{ title: 'TeamCity', path: '/integrations/teamcity', icon: SiTeamcity },
			{ title: 'BuildKite', path: '/integrations/buildkite', icon: SiBuildkite },
			{ title: 'GitLab', path: '/integrations/gitlab', icon: SiGitlab },
			{ title: 'Datadog', path: '/integrations/datadog', icon: SiDatadog },
			{ title: 'Slack', path: '/integrations/slack', icon: SiSlack },
			{ title: 'Graphite', path: '/integrations/graphite', icon: BsStack },
			{ title: 'Rush', path: '/integrations/rush', icon: TbBike },
			{ title: 'Dependabot', path: '/integrations/dependabot', icon: SiDependabot },
			{ title: 'Snyk', path: '/integrations/snyk', icon: SiSnyk },
		],
	},
	{
		title: 'Stacked PRs',
		icon: BsStack,
		path: '/stacked_prs',
	},
	{ title: 'Security', path: '/security', icon: FaShieldAlt },
	{ title: 'Badge', path: '/badge', icon: BiBadgeCheck },
	{ title: 'Billing', path: '/billing', icon: FaMoneyBill1 },
];

function addUuidOnGroups(items: NavItem[]): NavItem[] {
	return items.map((item) => {
		if (item.children) {
			return {
				...item,
				id: v5(JSON.stringify(item.children), v5.DNS),
				children: addUuidOnGroups(item.children),
			};
		}

		return item;
	});
}

export default addUuidOnGroups(navItems);
