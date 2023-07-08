import { formatDateString } from '@/lib/common/date.helpers';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getSubjectColor } from '@/lib/theme/enumColors';

interface IProps {
  activities: any;
}

export default function Activities({ activities }: IProps) {
  return (
    <>
      {activities.length > 0 ? (
        <CardContainer className="md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
          {activities.map((activity: any) => (
            <Card
              decoration={getSubjectColor(activity.subjects.name).BG.GRADIENT}
              key={activity}
            >
              <Card.Title>{activity.title}</Card.Title>
              <Card.Subtitle>
                {formatDateString(activity.activity_timestamp!, {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </Card.Subtitle>

              {/* Card Categories */}
              <Card.Tags>
                {/* {tags?.slice(0, 3).map((t, i) => (
                <Card.Tag
                  content={t}
                  colors={getSubjectColor(subject!).BLEND.SUBDUED}
                  url={`/lesson-plans?tag=${t}`}
                  key={i}
                />
              ))} */}
                <Card.Tag
                  content={activity.subjects.name}
                  colors={getSubjectColor(activity.subjects.name).BLEND.SUBDUED}
                ></Card.Tag>
                <Card.Tag
                  content="Physical Development"
                  colors={getSubjectColor(activity.subjects.name).BLEND.SUBDUED}
                ></Card.Tag>
                <Card.Tag
                  content="Mindfulness"
                  colors={getSubjectColor(activity.subjects.name).BLEND.SUBDUED}
                ></Card.Tag>
              </Card.Tags>

              {/* Card Footer */}
              <Card.Footer className="mt-4">
                {/* Attending */}
                <OverlappingImages>
                  {/* {activity.students?.map((s: any, i: any) => (
                    <Avatar
                      src={s.avatar_url}
                      alt={s.first_name}
                      url="/account?view=students"
                      key={i}
                    />
                  ))} */}
                  <Avatar
                    src="/static/icons/avatars/lion.png"
                    alt="Little"
                    url="/account?view=students"
                  />
                  <Avatar
                    src="/static/icons/avatars/bear.png"
                    alt="Big"
                    url="/account?view=students"
                  />
                </OverlappingImages>

                {/* Link */}
                {/* <Card.Action url={`/lesson-plans/${id}`} /> */}
              </Card.Footer>
            </Card>
          ))}
        </CardContainer>
      ) : (
        <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
          No activities found
        </p>
      )}
    </>
  );
}
